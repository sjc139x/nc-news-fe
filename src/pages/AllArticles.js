import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import PageNumbers from '../components/PageNumbers';
import Search from '../components/Search';
import { getArticles } from '../api-interactions';
import axios from 'axios';

class AllArticles extends React.Component {
    state = {
        articles: null,
        pageNumber: 1
    }
    
    render () {
        const { articles } = this.state;
        return (
            <div>
                <Search sortArticles={this.sortArticles}/>
                {articles && <ArticleGrid articles={articles}/>}
                <PageNumbers setPageNumber={this.setPageNumber} />
            </div>
        )
    }

    componentDidMount () {
        getArticles(1)
        .then(articles => {
            this.setState({ articles });
        });
    }

    setPageNumber = (pageNumber) => {
        getArticles(pageNumber)
        .then(articles => {
            this.setState({ articles });
        });
    }

    sortArticles = (column, order) => {
        return axios.get('https://nc-news-sjc.herokuapp.com/api/articles', { params: {
            sort_by: column,
            order: order
        }})
        .then(({ data: { articles } }) => {
            this.setState({ articles });
        });
    }

};

export default AllArticles;