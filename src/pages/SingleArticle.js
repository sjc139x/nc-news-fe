import React from 'react';
import axios from 'axios';

class SingleArticle extends React.Component {
    state = {
        article: null
    }

    render () {
        const { article } = this.state;
        return (
            <div>
                {article && <div>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>}
            </div>
        )
    }

    componentDidMount () {
        const { article_id } = this.props;
        axios.get(`https://nc-news-sjc.herokuapp.com/api/articles/${article_id}`)
        .then(({ data: { article } }) => {
            this.setState({ article: article });
        });
    }
};

export default SingleArticle;