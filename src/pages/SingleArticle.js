import React from 'react';
import CommentGrid from '../components/CommentGrid';
import Voting from '../components/Voting';
import { navigate } from '@reach/router';
import { postComment, getSingleArticle, getComments, removeComment } from '../api-interactions';

class SingleArticle extends React.Component {
    state = {
        article: null,
        comments: null,
        commentInput: 'have your say →'
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

                {comments && <CommentGrid comments={comments} loggedInUser={loggedInUser} commentInput={commentInput} addComment={this.addComment} handleCommentTyping={this.handleCommentTyping} deleteOwnComment={this.deleteOwnComment} handleClick={this.handleClick} />}

            </div>
            </>
        )
    }

    componentDidMount () {
        const { article_id } = this.props;
        
        getSingleArticle(article_id)
        .then(article => this.setState({ article }))
        .catch(({ response }) => {
            navigate("/oops", { replace: true, state: {
                code: response.status,
                msg: response.data.msg
            }});
        });

        getComments(article_id)
        .then(comments => this.setState({ comments }));
    }

    handleClick = () => {
        this.setState({ commentInput: '' });
    }

    handleCommentTyping = (event) => {
        this.setState({ commentInput: event.target.value });
    }

    addComment = (event) => {
        const { article_id, loggedInUser } = this.props;
        const { commentInput } = this.state;
        event.preventDefault();

        postComment(article_id, loggedInUser.username, commentInput)
        .then(comment => {
            this.setState(prevState => ({
                comments: [comment, ...prevState.comments]
            }));
        });
       
    }

    deleteOwnComment = (comment_id) => {
        removeComment(comment_id)
        .then(res => {
            this.setState(prevState => ({
                comments: prevState.comments.filter(comment => comment.comment_id !== comment_id)
            }));
        })
    }

};

export default SingleArticle;