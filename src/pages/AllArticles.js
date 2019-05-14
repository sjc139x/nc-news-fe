import React from 'react';
import axios from 'axios';
import ArticleGrid from '../components/ArticleGrid';
import LogInOverlay from '../components/LogInOverlay';

class AllArticles extends React.Component {
    state = {
        articles: null
    }
    
    render () {
        const { articles } = this.state;
        const { logInButtonClicked, signUpButtonClicked } = this.props;
        console.log(logInButtonClicked + '<-- log in //', signUpButtonClicked + '<-- sign up');
        return (
            <div>
                {articles && <ArticleGrid articles={articles}/>}
                {logInButtonClicked && <LogInOverlay/>}
            </div>
        )
    }

    componentDidMount () {
        axios.get('https://nc-news-sjc.herokuapp.com/api/articles')
        .then(({ data: { articles } }) => {
            this.setState({ articles: articles });
        });
    }
};

export default AllArticles;