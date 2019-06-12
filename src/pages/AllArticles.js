import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import PageNumbers from "../components/PageNumbers";
import SortArticles from "../components/SortArticles";
import { Link } from "@reach/router";
import {
  getArticlesByPage,
  getArticlesBySort,
  removeArticle,
  getArticlesLength
} from "../api-interactions";

class AllArticles extends React.Component {
  state = {
    articles: null,
    allArticlesLength: 0
  };

  render() {
    const { articles, allArticlesLength } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortArticles sortArticles={this.sortArticles} />
        {loggedInUser && (
          <Link to="new-article">
            <button className="AllArticles-NewArticleButton">
              Post New Article
            </button>
          </Link>
        )}
        {articles && (
          <ArticleGrid
            articles={articles}
            loggedInUser={loggedInUser}
            deleteOwnArticle={this.deleteOwnArticle}
          />
        )}
        {articles && (
          <PageNumbers
            numOfArticles={allArticlesLength}
            paginateArticles={this.paginateArticles}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticlesByPage(1).then(articles => {
      this.setState({ articles });
    });
    getArticlesLength().then(allArticlesLength => {
      this.setState({ allArticlesLength });
    });
  }

  paginateArticles = pageNumber => {
    getArticlesByPage(pageNumber).then(articles => {
      this.setState({ articles });
    });
  };

  sortArticles = (column, order) => {
    getArticlesBySort(column, order).then(articles => {
      this.setState({ articles });
    });
  };

  deleteOwnArticle = article_id => {
    removeArticle(article_id).then(res => {
      this.setState(prevState => ({
        articles: prevState.articles.filter(
          article => article.article_id !== article_id
        )
      }));
    });
  };
}

export default AllArticles;
