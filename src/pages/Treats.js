import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import SortArticles from "../components/SortArticles";
import {
  getArticlesByTopic,
  removeArticle,
  getSortedArticlesByTopic
} from "../api-interactions";

class Treats extends React.Component {
  state = {
    treatContent: null
  };

  render() {
    const { treatContent } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortArticles sortArticles={this.sortArticles} />
        {treatContent && (
          <ArticleGrid
            articles={treatContent}
            loggedInUser={loggedInUser}
            deleteOwnArticle={this.deleteOwnArticle}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticlesByTopic("treats").then(treatContent => {
      this.setState({ treatContent });
    });
  }

  sortArticles = (column, order) => {
    const topic = this.state.treatContent[0].topic;
    getSortedArticlesByTopic(topic, column, order).then(treatContent => {
      this.setState({ treatContent });
    });
  };

  deleteOwnArticle = article_id => {
    removeArticle(article_id).then(res => {
      this.setState(prevState => ({
        treatContent: prevState.treatContent.filter(
          treatArticle => treatArticle.article_id !== article_id
        )
      }));
    });
  };
}

export default Treats;
