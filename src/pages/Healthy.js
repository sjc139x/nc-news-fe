import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import SortArticles from "../components/SortArticles";
import { Link } from "@reach/router";
import {
  getArticlesByTopic,
  removeArticle,
  getSortedArticlesByTopic
} from "../api-interactions";

class Healthy extends React.Component {
  state = {
    healthyContent: null
  };

  render() {
    const { healthyContent } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortArticles sortArticles={this.sortArticles} />
        {loggedInUser && (
          <Link to="/new-article">
            <button className="NewArticleButton">Post New Article</button>
          </Link>
        )}
        {healthyContent && (
          <ArticleGrid
            articles={healthyContent}
            loggedInUser={loggedInUser}
            deleteOwnArticle={this.deleteOwnArticle}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticlesByTopic("healthy").then(healthyContent => {
      this.setState({ healthyContent });
    });
  }

  sortArticles = (column, order) => {
    const topic = this.state.healthyContent[0].topic;
    getSortedArticlesByTopic(topic, column, order).then(healthyContent => {
      this.setState({ healthyContent });
    });
  };

  deleteOwnArticle = article_id => {
    removeArticle(article_id).then(res => {
      this.setState(prevState => ({
        healthyContent: prevState.healthyContent.filter(
          healthyArticle => healthyArticle.article_id !== article_id
        )
      }));
    });
  };
}

export default Healthy;
