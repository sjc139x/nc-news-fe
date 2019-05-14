import React from 'react';
import axios from 'axios';

class SingleArticle extends React.Component {
    state = {
        article: null,
        comments: null
    }

    render () {
        const { article, comments } = this.state;
        return (
            <>
            <img src="https://i.ibb.co/GppkmH1/IMG-20190205-142516903.jpg" alt="breakfast" id="SingleArticle-image"/>
            <div className="singleArticle">

                {article && <div>
                    <h3 id="articleTitle">{article.title}</h3>
                    <p id="articleBody">{article.body}</p>
                </div>}

                <h4>Comments...</h4>
                {comments && <ul>
                    {comments.map((comment, index) => (
                        <li key={index} id="commentList">{comment.body}</li>
                    ))}
                </ul>}

            </div>
            </>
        )
    }

    componentDidMount () {
        const { article_id } = this.props;

        axios.get(`https://nc-news-sjc.herokuapp.com/api/articles/${article_id}`)
        .then(({ data: { article } }) => {
            this.setState({ article });
        });

        axios.get(`https://nc-news-sjc.herokuapp.com/api/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            this.setState({ comments })
        });
    }
};

export default SingleArticle;