import React from 'react';
import axios from 'axios';

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
            <div className="votingTile">
                {loggedInUser && <button type="button" disabled={isUpvoteButtonDisabled} value="yum" onClick={e => this.changeVotes(1, e.target.value)} className="votingButtons" >YUM</button>}

                {(voteModifier === 0) && <h5 id="voteValue">• no votes •</h5>}
                {(voteModifier === 1) && <h5 id="voteValue">• {voteModifier} person liked this {type.slice(0, -1)} •</h5>}
                {(voteModifier === -1) && <h5 id="voteValue">• {Math.abs(voteModifier)} person disliked this {type.slice(0, -1)} •</h5>}
                {(voteModifier > 1) && <h5 id="voteValue">• {voteModifier} people liked this {type.slice(0, -1)} •</h5>}
                {(voteModifier < -1) && <h5 id="voteValue">• {Math.abs(voteModifier)} people disliked this {type.slice(0, -1)} •</h5>}
                
                {loggedInUser && <button type="button" disabled={isDownvoteButtonDisabled} value="yuck" onClick={e => this.changeVotes(-1, e.target.value)} className="votingButtons" >YUCK</button>}
            </div>
        )
    }

    changeVotes = (integer, direction) => {
        const { type, id } = this.props;

        axios.patch(`https://nc-news-sjc.herokuapp.com/api/${type}/${id}`, {
            inc_votes: integer
        });
        
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