import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import PageNumbers from '../components/PageNumbers';
import Search from '../components/Search';
import { getArticles, getArticlesBySort } from '../api-interactions';

class AllArticles extends React.Component {
    state = {
        articles: null,
    }
    
    render () {
        const { articles } = this.state;
        return (
            <div>
                <Search sortArticles={this.sortArticles}/>
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