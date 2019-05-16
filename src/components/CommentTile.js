import React from 'react';
import Voting from './ArticleVoting';

function CommentTile ({ comment, changeVotes, loggedInUser }) {
    return (
        <div className="commentTile">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            {/* <Voting loggedInUser={loggedInUser} changeVotes={changeVotes} content={comment}/> */}
        </div>
    )
};

export default CommentTile;