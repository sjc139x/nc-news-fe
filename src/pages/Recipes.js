import React from 'react';
import getArticles from '../api-interactions';
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
        getArticles('recipes')
        .then(recipes => {
            this.setState({ recipes })
        });
    }

};

export default Recipes;
