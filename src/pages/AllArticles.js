import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import PageNumbers from '../components/PageNumbers';
import SortArticles from '../components/SortArticles';
import { Link } from '@reach/router';
import { getArticles, getArticlesBySort } from '../api-interactions';

class AllArticles extends React.Component {
    state = {
        articles: null
    }
    
    render () {
        const { articles } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                <SortArticles sortArticles={this.sortArticles}/>
                {loggedInUser && <Link to="new-article"><button className="newArticle-button">Post New Article</button></Link>}
                {articles && <ArticleGrid articles={articles}/>}
                <PageNumbers paginateArticles={this.paginateArticles} />
            </div>
        )
    }

    componentDidMount () {
        getArticles(1)
        .then(articles => {
            this.setState({ articles });
        });
    }

    paginateArticles = (pageNumber) => {
        getArticles(pageNumber)
        .then(articles => {
            this.setState({ articles });
        });
    }

    sortArticles = (column, order) => {
        getArticlesBySort(column, order)
        .then(articles => {
            this.setState({ articles });
        });
    }

};

export default AllArticles;