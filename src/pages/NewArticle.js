import React from "react";
import { navigate } from "@reach/router";
import { postArticle } from "../api-interactions";

class NewArticle extends React.Component {
  state = {
    titleInput: "",
    bodyInput: "",
    topicInput: ""
  };

  render() {
    const { titleInput, bodyInput } = this.state;
    return (
      <div>
        <h1 className="NewArticle-Header">bring it to the table →</h1>
        <form className="NewArticle-Form">
          <label htmlFor="article-title">title:</label>
          <br />
          <textarea
            name="article-title"
            className="NewArticle-TitleInput"
            value={titleInput}
            onChange={this.handleTyping}
          />
          <br />
          <label htmlFor="article-body">body:</label>
          <br />
          <textarea
            name="article-body"
            className="NewArticle-BodyInput"
            value={bodyInput}
            onChange={this.handleTyping}
          />
          <br />
          <select onChange={this.handleTopicSelect}>
            <option value="please-select">Please select a topic...</option>
            <option value="recipes">Recipes</option>
            <option value="reviews">Reviews</option>
            <option value="top 5">Top 5</option>
            <option value="chef life">Chef's Table</option>
            <option value="healthy">Healthy Living</option>
            <option value="treats">Treat Yo' Self</option>
          </select>
          <button
            type="submit"
            onClick={this.postArticle}
            className="NewArticle-PostArticleButton"
          >
            Post Article
          </button>
        </form>
      </div>
    );
  }

  handleTyping = event => {
    if (event.target.name === "article-title")
      this.setState({ titleInput: event.target.value });
    else if (event.target.name === "article-body")
      this.setState({ bodyInput: event.target.value });
  };

  handleTopicSelect = event => {
    this.setState({ topicInput: event.target.value });
  };

  postArticle = event => {
    const { titleInput, bodyInput, topicInput } = this.state;
    const { loggedInUser } = this.props;
    event.preventDefault();
    postArticle(titleInput, bodyInput, loggedInUser.username, topicInput).then(
      newArticle => {
        navigate(`/article/${newArticle.article_id}`);
      }
    );
  };
}

export default NewArticle;
