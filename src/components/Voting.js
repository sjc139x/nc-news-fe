import React from 'react';
import axios from 'axios';

class Voting extends React.Component {
    state = {
        voteModifier: 0
    }

    render () {
        const { loggedInUser, votes } = this.props;
        let { voteModifier } = this.state;
        voteModifier += votes;
        return (
            <div>
                <h5 id="voteValue">{voteModifier}</h5>
                {loggedInUser && <div>
                    <button type="button" onClick={e => this.changeVotes(1)} className="votingButtons" >YUM</button>
                    <button type="button" onClick={e => this.changeVotes(-1)} className="votingButtons" >YUCK</button>
                </div>}
            </div>
        )
    }

    changeVotes = (integer) => {
        const { type, id } = this.props;

        axios.patch(`https://nc-news-sjc.herokuapp.com/api/${type}/${id}`, {
            inc_votes: integer
        });
        
        this.setState(prevState => ({
            voteModifier: prevState.voteModifier + integer
        }));
    }
}

export default Voting;