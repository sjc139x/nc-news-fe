import React from "react";
import CommentGrid from "../components/CommentGrid";
import Voting from "../components/Voting";
import { navigate } from "@reach/router";
import {
  postComment,
  getSingleArticle,
  getComments,
  removeComment
} from "../api-interactions";

class SingleArticle extends React.Component {
  state = {
    article: null,
    comments: null,
    commentInput: "",
    isButtonDisabled: true
  };

  render() {
    const { article, comments, commentInput, isButtonDisabled } = this.state;
    const { loggedInUser } = this.props;
    return (
      <>
        {article && (
          <img
            src={article.image}
            alt="food_image"
            className="SingleArticle-TopImage"
          />
        )}
        <div className="SingleArticle-Container">
          {article && (
            <div>
              <h3 className="SingleArticle-Title">{article.title}</h3>
              <p className="SingleArticle-MainBody">{article.body}</p>
              <Voting
                loggedInUser={loggedInUser}
                type={"articles"}
                id={article.article_id}
                votes={article.votes}
              />
            </div>
          )}

          {comments && (
            <CommentGrid
              comments={comments}
              loggedInUser={loggedInUser}
              commentInput={commentInput}
              addComment={this.addComment}
              handleCommentTyping={this.handleCommentTyping}
              deleteOwnComment={this.deleteOwnComment}
              isButtonDisabled={isButtonDisabled}
            />
          )}
        </div>
      </>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;

    getSingleArticle(article_id)
      .then(article => this.setState({ article }))
      .catch(({ response }) => {
        navigate("/oops", {
          replace: true,
          state: {
            code: response.status,
            msg: response.data.msg
          }
        });
      });

    getComments(article_id).then(comments => this.setState({ comments }));
  }

  handleCommentTyping = event => {
    this.setState({ commentInput: event.target.value });
    this.setState({ isButtonDisabled: false });
  };

  addComment = event => {
    const { article_id, loggedInUser } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();

    postComment(article_id, loggedInUser.username, commentInput).then(
      comment => {
        this.setState(prevState => ({
          comments: [comment, ...prevState.comments]
        }));
        this.setState({ commentInput: "" });
        this.setState({ isButtonDisabled: true });
      }
    );
  };

  deleteOwnComment = comment_id => {
    removeComment(comment_id).then(res => {
      this.setState(prevState => ({
        comments: prevState.comments.filter(
          comment => comment.comment_id !== comment_id
        )
      }));
    });
  };
}

export default SingleArticle;
