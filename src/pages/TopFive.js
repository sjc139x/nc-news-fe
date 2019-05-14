import React from 'react';
import getArticles from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class TopFive extends React.Component {
    state = {
        topFives: null
    }

    render () {
        const { topFives } = this.state;
        return (
            <div>
                {topFives && <ArticleGrid articles={topFives}/>}
            </div>
        )
    }

    componentDidMount () {
        getArticles('top 5')
        .then(topFives => {
            this.setState({ topFives })
        });
    }

};

export default TopFive;