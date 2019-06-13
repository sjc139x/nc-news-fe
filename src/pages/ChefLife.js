import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import SortArticles from "../components/SortArticles";
import { Link } from "@reach/router";
import {
  getArticlesByTopic,
  removeArticle,
  getSortedArticlesByTopic
} from "../api-interactions";

class ChefLife extends React.Component {
  state = {
    chefLifeContent: null
  };

  render() {
    const { chefLifeContent } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortArticles sortArticles={this.sortArticles} />
        {loggedInUser && (
          <Link to="/new-article">
            <button className="NewArticleButton">Post New Article</button>
          </Link>
        )}
        {chefLifeContent && (
          <ArticleGrid
            articles={chefLifeContent}
            loggedInUser={loggedInUser}
            deleteOwnArticle={this.deleteOwnArticle}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticlesByTopic("chef life").then(chefLifeContent => {
      this.setState({ chefLifeContent });
    });
  }

  sortArticles = (column, order) => {
    const topic = this.state.chefLifeContent[0].topic;
    getSortedArticlesByTopic(topic, column, order).then(chefLifeContent => {
      this.setState({ chefLifeContent });
    });
  };

  deleteOwnArticle = article_id => {
    removeArticle(article_id).then(res => {
      this.setState(prevState => ({
        chefLifeContent: prevState.chefLifeContent.filter(
          chefLifeArticle => chefLifeArticle.article_id !== article_id
        )
      }));
    });
  };
}

export default ChefLife;
