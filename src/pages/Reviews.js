import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import { getArticlesByTopic, removeArticle } from '../api-interactions';

class Reviews extends React.Component {
    state = {
        reviews: null
    }

    render () {
        const { reviews } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {reviews && <ArticleGrid articles={reviews} loggedInUser={loggedInUser} deleteArticle={this.deleteArticle} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('reviews')
        .then(reviews => {
            this.setState({ reviews })
        });
    }

    //this works but perhaps should be more optimistic? also how to not mess up pagination?
    deleteArticle = article_id => {
        removeArticle(article_id)
        .then(res => {
            this.setState(prevState => ({
                reviews: prevState.reviews.filter(review => review.article_id !== article_id)
            }))
        });
    }

};

export default Reviews;