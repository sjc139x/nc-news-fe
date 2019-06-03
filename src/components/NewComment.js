import React from "react";

function NewCommment({
  addComment,
  handleCommentTyping,
  commentInput,
  isButtonDisabled
}) {
  return (
    <form className="NewComment-Container">
      <textarea
        type="text"
        value={commentInput}
        onChange={handleCommentTyping}
        className="NewComment-InputBox"
      />
      <button
        type="submit"
        className="NewComment-CommentButton"
        disabled={isButtonDisabled}
        onClick={addComment}
      >
        COMMENT
      </button>
    </form>
  );
}

export default NewCommment;
