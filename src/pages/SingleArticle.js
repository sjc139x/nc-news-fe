import React from 'react';
import axios from 'axios';
import CommentGrid from '../components/CommentGrid';
import Voting from '../components/Voting';

//could i move the comments out of here?
class SingleArticle extends React.Component {
    state = {
        article: null,
        comments: null,
        commentInput: ''
    }

    render () {
        const { article, comments, commentInput } = this.state;
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

                {comments && <CommentGrid comments={comments} loggedInUser={loggedInUser} commentInput={commentInput} addComment={this.addComment} handleCommentTyping={this.handleCommentTyping}/>}

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

    handleCommentTyping = (event) => {
        this.setState({ commentInput: event.target.value });
    }

    addComment = () => {
        const { article_id, loggedInUser } = this.props;
        const { commentInput } = this.state;

        axios.post(`https://nc-news-sjc.herokuapp.com/api/articles/${article_id}/comments`, {
            username: loggedInUser.username,
            body: commentInput
        })
        .then(({ data: { comment } }) => {
            this.setState(prevState => ({
                comments: [comment, ...prevState.comments]
            }));
        });
    }

};

export default SingleArticle;