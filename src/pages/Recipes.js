import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import { getArticlesByTopic, removeArticle } from '../api-interactions';

class Recipes extends React.Component {
    state = {
        recipes: null
    }

    render () {
        const { recipes } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {recipes && <ArticleGrid articles={recipes} loggedInUser={loggedInUser} deleteOwnArticle={this.deleteOwnArticle} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('recipes')
        .then(recipes => {
            this.setState({ recipes })
        });
    }

    //this works but perhaps should be more optimistic? also how to not mess up pagination?
    deleteOwnArticle = article_id => {
        removeArticle(article_id)
        .then(res => {
            this.setState(prevState => ({
                recipes: prevState.recipes.filter(recipe => recipe.article_id !== article_id)
            }))
        });
    }

};

export default Recipes;
