import React from 'react';
import getArticles from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class Reviews extends React.Component {
    state = {
        reviews: null
    }

    render () {
        const { reviews } = this.state;
        return (
            <div>
                {reviews && <ArticleGrid articles={reviews}/>}
            </div>
        )
    }

    componentDidMount () {
        getArticles('reviews')
        .then(reviews => {
            this.setState({ reviews })
        });
    }

};

export default Reviews;