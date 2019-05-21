import React from 'react';
import { alterVotes } from '../api-interactions';

class Voting extends React.Component {
    state = {
        voteModifier: 0,
        areButtonsDisabled: false,
        isUpvoteButtonDisabled: false,
        isDownvoteButtonDisabled: false
    }

    render () {
        const { loggedInUser, votes, type } = this.props;
        let { voteModifier } = this.state;
        const { isUpvoteButtonDisabled, isDownvoteButtonDisabled } = this.state;
        voteModifier += votes;
        return (
            <div className="Voting-Container">
                {loggedInUser && <button type="button" disabled={isUpvoteButtonDisabled} value="yum" onClick={e => this.changeVotes(1, e.target.value)} className="Voting-UpvoteButton" >YUM</button>}

                {(voteModifier === 0) && <h5 className="Voting-VoteValue">• no votes •</h5>}
                {(voteModifier === 1) && <h5 className="Voting-VoteValue">• {voteModifier} person liked this {type.slice(0, -1)} •</h5>}
                {(voteModifier === -1) && <h5 className="Voting-VoteValue">• {Math.abs(voteModifier)} person disliked this {type.slice(0, -1)} •</h5>}
                {(voteModifier > 1) && <h5 className="Voting-VoteValue">• {voteModifier} people liked this {type.slice(0, -1)} •</h5>}
                {(voteModifier < -1) && <h5 className="Voting-VoteValue">• {Math.abs(voteModifier)} people disliked this {type.slice(0, -1)} •</h5>}
                
                {loggedInUser && <button type="button" disabled={isDownvoteButtonDisabled} value="yuck" onClick={e => this.changeVotes(-1, e.target.value)} className="Voting-DownvoteButton" >YUCK</button>}
            </div>
        )
    }

    changeVotes = (integer, direction) => {
        const { type, id } = this.props;

        alterVotes(type, id, integer);
        
        this.setState(prevState => ({
            voteModifier: prevState.voteModifier + integer
        }));

        if (direction === "yum") {
            this.setState({ isUpvoteButtonDisabled: true });
            this.setState({ isDownvoteButtonDisabled: false });
        } else if (direction === "yuck") {
            this.setState({ isDownvoteButtonDisabled: true });
            this.setState({ isUpvoteButtonDisabled: false });
        }
    }
}

export default Voting;