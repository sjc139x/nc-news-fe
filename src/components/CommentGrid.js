import React from 'react';
import CommentTile from './CommentTile';
import NewComment from '../components/NewComment';

function CommentGrid ({ comments, loggedInUser, commentInput, addComment, handleCommentTyping, deleteOwnComment }) {
    return (
        <ul>
            {loggedInUser && <NewComment addComment={addComment} commentInout={commentInput} handleCommentTyping={handleCommentTyping} />}
            {comments.map((comment, i) => (
                <li key={i} id="commentList">
                    <CommentTile comment={comment} loggedInUser={loggedInUser} commentInput={commentInput} handleCommentTyping={handleCommentTyping} deleteOwnComment={deleteOwnComment}/>
                </li>
            ))}
        </ul>
    );
};

export default CommentGrid;