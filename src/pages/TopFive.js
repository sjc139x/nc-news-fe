import React from 'react';
import { getArticlesByTopic } from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class TopFive extends React.Component {
    state = {
        topFives: null
    }

    render () {
        const { topFives } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {topFives && <ArticleGrid articles={topFives} loggedInUser={loggedInUser} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('top 5')
        .then(topFives => {
            this.setState({ topFives })
        });
    }

};

export default TopFive;