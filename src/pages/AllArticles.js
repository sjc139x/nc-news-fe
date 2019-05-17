import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import PageNumbers from '../components/PageNumbers';
import { getArticles } from '../api-interactions';

class AllArticles extends React.Component {
    state = {
        articles: null,
        pageNumber: 1
    }
    
    render () {
        const { articles } = this.state;
        console.log(articles)
        return (
            <div>
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

};

export default AllArticles;