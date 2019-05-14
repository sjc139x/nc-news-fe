import React from 'react';
import { getArticlesByTopic } from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class Recipes extends React.Component {
    state = {
        recipes: null
    }

    render () {
        const { recipes } = this.state;
        return (
            <div>
                {recipes && <ArticleGrid articles={recipes}/>}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('recipes')
        .then(recipes => {
            this.setState({ recipes })
        });
    }

};

export default Recipes;
