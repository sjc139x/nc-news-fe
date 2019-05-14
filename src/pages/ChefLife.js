import React from 'react';
import getArticles from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class ChefLife extends React.Component {
    state = {
        chefLifeContent: null
    }

    render () {
        const { chefLifeContent } = this.state;
        return (
            <div>
                {chefLifeContent && <ArticleGrid articles={chefLifeContent}/>}
            </div>
        )
    }

    componentDidMount () {
        getArticles('chef life')
        .then(chefLifeContent => {
            this.setState({ chefLifeContent })
        });
    }

};

export default ChefLife;