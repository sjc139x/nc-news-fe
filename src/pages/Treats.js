import React from 'react';
import { getArticlesByTopic } from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class Treats extends React.Component {
    state = {
        treatContent: null
    }

    render () {
        const { treatContent } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {treatContent && <ArticleGrid articles={treatContent} loggedInUser={loggedInUser} />}
            </div>
        )
    }

    componentDidMount () {
        getArticlesByTopic('treats')
        .then(treatContent => {
            this.setState({ treatContent })
        });
    }

};

export default Treats;