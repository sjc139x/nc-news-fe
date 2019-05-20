import React from 'react';

function NewCommment ({ addComment, handleCommentTyping, commentInput, handleClick }) {
    return (
        <form className="commentSection">
            <input type="text" value={commentInput} onClick={handleClick} onChange={handleCommentTyping} className="commentBox"/>
            <button type="submit" className="commentButton" onClick={addComment}>COMMENT</button>
        </form>
    )
};

export default NewCommment;