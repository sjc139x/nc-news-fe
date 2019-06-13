import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import SortArticles from "../components/SortArticles";
import {
  getArticlesByTopic,
  removeArticle,
  getSortedArticlesByTopic
} from "../api-interactions";

class Reviews extends React.Component {
  state = {
    reviews: null
  };

  render() {
    const { reviews } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortArticles sortArticles={this.sortArticles} />
        {reviews && (
          <ArticleGrid
            articles={reviews}
            loggedInUser={loggedInUser}
            deleteOwnArticle={this.deleteOwnArticle}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticlesByTopic("reviews").then(reviews => {
      this.setState({ reviews });
    });
  }

  sortArticles = (column, order) => {
    const topic = this.state.reviews[0].topic;
    getSortedArticlesByTopic(topic, column, order).then(reviews => {
      this.setState({ reviews });
    });
  };

  deleteOwnArticle = article_id => {
    removeArticle(article_id).then(res => {
      this.setState(prevState => ({
        reviews: prevState.reviews.filter(
          review => review.article_id !== article_id
        )
      }));
    });
  };
}

export default Reviews;
