import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import { getArticlesByTopic, removeArticle } from '../api-interactions';

class Healthy extends React.Component {
    state = {
        healthyContent: null
    }

    render () {
        const { healthyContent } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {healthyContent && <ArticleGrid articles={healthyContent} loggedInUser={loggedInUser} deleteArticle={this.deleteArticle} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('healthy')
        .then(healthyContent => {
            this.setState({ healthyContent })
        });
    }

    //this works but perhaps should be more optimistic? also how to not mess up pagination?
    deleteArticle = article_id => {
        removeArticle(article_id)
        .then(res => {
            this.setState(prevState => ({
                healthyContent: prevState.healthyContent.filter(healthyArticle => healthyArticle.article_id !== article_id)
            }))
        });
    }

};

export default Healthy;