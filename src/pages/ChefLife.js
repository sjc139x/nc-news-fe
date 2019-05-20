import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import { getArticlesByTopic, removeArticle } from '../api-interactions';

class ChefLife extends React.Component {
    state = {
        chefLifeContent: null
    }

    render () {
        const { chefLifeContent } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {chefLifeContent && <ArticleGrid articles={chefLifeContent} loggedInUser={loggedInUser} deleteOwnArticle={this.deleteOwnArticle} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('chef life')
        .then(chefLifeContent => {
            this.setState({ chefLifeContent })
        });
    }

    //this works but perhaps should be more optimistic? also how to not mess up pagination?
    deleteOwnArticle = article_id => {
        removeArticle(article_id)
        .then(res => {
            this.setState(prevState => ({
                chefLifeContent: prevState.chefLifeContent.filter(chefLifeArticle => chefLifeArticle.article_id !== article_id)
            }))
        });
    }

};

export default ChefLife;