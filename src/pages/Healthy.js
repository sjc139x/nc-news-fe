import React from 'react';
import getArticles from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class Healthy extends React.Component {
    state = {
        healthyContent: null
    }

    render () {
        const { healthyContent } = this.state;
        return (
            <div>
                {healthyContent && <ArticleGrid articles={healthyContent}/>}
            </div>
        )
    }

    componentDidMount () {
        getArticles('healthy')
        .then(healthyContent => {
            this.setState({ healthyContent })
        });
    }

};

export default Healthy;