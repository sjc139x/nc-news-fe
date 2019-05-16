import React from 'react';
import Voting from './Voting';

function CommentTile ({ comment, loggedInUser }) {
    return (
        <div className="commentTile">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <Voting loggedInUser={loggedInUser} type={'comments'} id={comment.comment_id} votes={comment.votes}/>
        </div>
    )
};

export default CommentTile;