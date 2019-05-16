import React from 'react';
import CommentTile from './CommentTile';

function CommentGrid ({ comments, changeVotes, loggedInUser }) {
    return (
        <ul>
            {comments.map((comment, i) => (
                <li key={i} id="commentList">
                    <CommentTile comment={comment} loggedInUser={loggedInUser} changeVotes={changeVotes}/>
                </li>
            ))}
        </ul>
    );
};

export default CommentGrid;