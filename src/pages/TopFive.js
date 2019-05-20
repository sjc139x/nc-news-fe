import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import { getArticlesByTopic, removeArticle } from '../api-interactions';

class TopFive extends React.Component {
    state = {
        topFives: null
    }

    render () {
        const { topFives } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {topFives && <ArticleGrid articles={topFives} loggedInUser={loggedInUser} deleteOwnArticle={this.deleteOwnArticle} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('top 5')
        .then(topFives => {
            this.setState({ topFives })
        });
    }

    //this works but perhaps should be more optimistic? also how to not mess up pagination?
    deleteOwnArticle = article_id => {
        removeArticle(article_id)
        .then(res => {
            this.setState(prevState => ({
                topFives: prevState.topFives.filter(topFiveArticle => topFiveArticle.article_id !== article_id)
            }))
        });
    }

};

export default TopFive;