import React from 'react';
import axios from 'axios';
import CommentGrid from '../components/CommentGrid';
import Voting from '../components/Voting';

class SingleArticle extends React.Component {
    state = {
        article: null,
        comments: null
    }

    render () {
        const { article, comments } = this.state;
        const { loggedInUser } = this.props;
        return (
            <>
            <img src="https://i.ibb.co/GppkmH1/IMG-20190205-142516903.jpg" alt="breakfast" id="SingleArticle-image"/>
            <div className="singleArticle">

                {article && <div>
                    <h3 id="articleTitle">{article.title}</h3>
                    <p id="articleBody">{article.body}</p>
                    <Voting loggedInUser={loggedInUser} type={'articles'} id={article.article_id} votes={article.votes}/>
                </div>}

                <h2 id="commentsTitle">Comments...</h2>
                {comments && <CommentGrid comments={comments} loggedInUser={loggedInUser}/>}

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