import React from 'react';
import Voting from './Voting';

function CommentTile ({ comment, loggedInUser, deleteOwnComment }) {
    return (
        <div className="commentTile">
            {loggedInUser && (comment.author === loggedInUser.username) && (
                <button type="button" onClick={e => deleteOwnComment(comment.comment_id)} id="deleteCommentButton">DELETE</button>
            )}
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <Voting loggedInUser={loggedInUser} type={'comments'} id={comment.comment_id} votes={comment.votes}/>
        </div>
    )
};

export default CommentTile;