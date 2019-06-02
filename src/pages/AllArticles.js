import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import PageNumbers from "../components/PageNumbers";
import SortArticles from "../components/SortArticles";
import { Link } from "@reach/router";
import {
  getArticles,
  getArticlesBySort,
  removeArticle
} from "../api-interactions";

class AllArticles extends React.Component {
  state = {
    articles: null
  };

  render() {
    const { articles } = this.state;
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
            numOfArticles={articles.length}
            paginateArticles={this.paginateArticles}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    getArticles(1).then(articles => {
      this.setState({ articles });
    });
  }

  paginateArticles = pageNumber => {
    getArticles(pageNumber).then(articles => {
      this.setState({ articles });
    });
  };

  sortArticles = (column, order) => {
    getArticlesBySort(column, order).then(articles => {
      this.setState({ articles });
    });
  };

  //this works but perhaps should be more optimistic? also how to not mess up pagination?
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
