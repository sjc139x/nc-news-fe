import React from "react";
import CommentTile from "./CommentTile";
import NewComment from "../components/NewComment";

function CommentGrid({
  comments,
  loggedInUser,
  commentInput,
  addComment,
  handleCommentTyping,
  deleteOwnComment,
  isButtonDisabled
}) {
  return (
    <ul>
      {loggedInUser && (
        <NewComment
          addComment={addComment}
          commentInput={commentInput}
          handleCommentTyping={handleCommentTyping}
          isButtonDisabled={isButtonDisabled}
        />
      )}
      {comments.map((comment, i) => (
        <li key={i} className="CommentGrid-ListItems">
          <CommentTile
            comment={comment}
            loggedInUser={loggedInUser}
            commentInput={commentInput}
            handleCommentTyping={handleCommentTyping}
            deleteOwnComment={deleteOwnComment}
          />
        </li>
      ))}
    </ul>
  );
}

export default CommentGrid;
