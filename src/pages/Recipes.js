import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import SortArticles from "../components/SortArticles";
import {
  getArticlesByTopic,
  removeArticle,
  getSortedArticlesByTopic
} from "../api-interactions";

class Recipes extends React.Component {
  state = {
    recipes: null
  };

  render() {
    const { recipes } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortArticles sortArticles={this.sortArticles} />
        {recipes && (
          <ArticleGrid
            articles={recipes}
            loggedInUser={loggedInUser}
            deleteOwnArticle={this.deleteOwnArticle}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticlesByTopic("recipes").then(recipes => {
      this.setState({ recipes });
    });
  }

  sortArticles = (column, order) => {
    const topic = this.state.recipes[0].topic;
    getSortedArticlesByTopic(topic, column, order).then(recipes => {
      this.setState({ recipes });
    });
  };

  deleteOwnArticle = article_id => {
    removeArticle(article_id).then(res => {
      this.setState(prevState => ({
        recipes: prevState.recipes.filter(
          recipe => recipe.article_id !== article_id
        )
      }));
    });
  };
}

export default Recipes;
