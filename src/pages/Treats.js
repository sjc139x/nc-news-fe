import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import { getArticlesByTopic, removeArticle } from '../api-interactions';

class Treats extends React.Component {
    state = {
        treatContent: null
    }

    render () {
        const { treatContent } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {treatContent && <ArticleGrid articles={treatContent} loggedInUser={loggedInUser} deleteOwnArticle={this.deleteOwnArticle} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('treats')
        .then(treatContent => {
            this.setState({ treatContent })
        });
    }

    //this works but perhaps should be more optimistic? also how to not mess up pagination?
    deleteOwnArticle = article_id => {
        removeArticle(article_id)
        .then(res => {
            this.setState(prevState => ({
                treatContent: prevState.treatContent.filter(treatArticle => treatArticle.article_id !== article_id)
            }))
        });
    }

};

export default Treats;