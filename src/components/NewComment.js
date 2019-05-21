import React from 'react';

function NewCommment ({ addComment, handleCommentTyping, commentInput, handleClick }) {
    return (
        <form className="NewComment-Container">
            <input type="text" value={commentInput} onClick={handleClick} onChange={handleCommentTyping} className="NewComment-InputBox" />
            <button type="submit" className="NewComment-CommentButton" onClick={addComment}>COMMENT</button>
        </form>
    )
};

export default NewCommment;