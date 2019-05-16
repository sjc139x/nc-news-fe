import React from 'react';

function NewCommment ({ addComment, handleCommentTyping, commentInput }) {
    return (
        <form className="commentSection">
            <h4>Have your say....</h4>
            <textarea type="text" value={commentInput} onChange={handleCommentTyping} className="commentBox"/>
            <button type="button" className="commentButton" onClick={addComment}>COMMENT</button>
        </form>
    )
};

export default NewCommment;