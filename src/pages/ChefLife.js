import React from 'react';
import { getArticlesByTopic } from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class ChefLife extends React.Component {
    state = {
        chefLifeContent: null
    }

    render () {
        const { chefLifeContent } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {chefLifeContent && <ArticleGrid articles={chefLifeContent} loggedInUser={loggedInUser} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('chef life')
        .then(chefLifeContent => {
            this.setState({ chefLifeContent })
        });
    }

};

export default ChefLife;