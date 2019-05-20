import React from 'react';
import { getArticlesByTopic } from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class Recipes extends React.Component {
    state = {
        recipes: null
    }

    render () {
        const { recipes } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {recipes && <ArticleGrid articles={recipes} loggedInUser={loggedInUser} />}
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
