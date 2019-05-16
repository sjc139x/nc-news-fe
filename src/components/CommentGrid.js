import React from 'react';
import CommentTile from './CommentTile';
import NewComment from '../components/NewComment';

function CommentGrid ({ comments, loggedInUser }) {
    return (
        <ul>
            {loggedInUser && <NewComment />}
            
            {comments.map((comment, i) => (
                <li key={i} id="commentList">
                    <CommentTile comment={comment} loggedInUser={loggedInUser}/>
                </li>
            ))}
        </ul>
    );
};

export default CommentGrid;