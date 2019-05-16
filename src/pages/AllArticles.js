import React from 'react';
import axios from 'axios';
import ArticleGrid from '../components/ArticleGrid';
import PageNumbers from '../components/PageNumbers';

class AllArticles extends React.Component {
    state = {
        articles: null,
        pageNumber: 1
    }
    
    render () {
        const { articles } = this.state;
        return (
            <div>
                {articles && <ArticleGrid articles={articles}/>}
                <PageNumbers setPageNumber={this.setPageNumber} />
            </div>
        )
    }

    componentDidMount () {
        const { pageNumber } = this.state;
        axios.get(`https://nc-news-sjc.herokuapp.com/api/articles?p=${pageNumber}`)
        .then(({ data: { articles } }) => {
            this.setState({ articles: articles });
        });
    }

    setPageNumber = (pageNumber) => {
        console.log(pageNumber);
    }

};

export default AllArticles;