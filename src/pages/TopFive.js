import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import SortArticles from "../components/SortArticles";
import {
  getArticlesByTopic,
  removeArticle,
  getSortedArticlesByTopic
} from "../api-interactions";

class TopFive extends React.Component {
  state = {
    topFives: null
  };

  render() {
    const { topFives } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortArticles sortArticles={this.sortArticles} />
        {topFives && (
          <ArticleGrid
            articles={topFives}
            loggedInUser={loggedInUser}
            deleteOwnArticle={this.deleteOwnArticle}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticlesByTopic("top 5").then(topFives => {
      this.setState({ topFives });
    });
  }

  sortArticles = (column, order) => {
    const topic = this.state.topFives[0].topic;
    getSortedArticlesByTopic(topic, column, order).then(topFives => {
      this.setState({ topFives });
    });
  };

  deleteOwnArticle = article_id => {
    removeArticle(article_id).then(res => {
      this.setState(prevState => ({
        topFives: prevState.topFives.filter(
          topFiveArticle => topFiveArticle.article_id !== article_id
        )
      }));
    });
  };
}

export default TopFive;
