import React from 'react';
import { getArticlesByTopic } from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class Healthy extends React.Component {
    state = {
        healthyContent: null
    }

    render () {
        const { healthyContent } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {healthyContent && <ArticleGrid articles={healthyContent} loggedInUser={loggedInUser} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('healthy')
        .then(healthyContent => {
            this.setState({ healthyContent })
        });
    }

};

export default Healthy;