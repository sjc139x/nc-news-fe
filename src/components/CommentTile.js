import React from 'react';
import Voting from './Voting';
import { getUserInfo } from '../api-interactions';
import { Link } from '@reach/router';

class CommentTile extends React.Component {
    state = {
        avatar_url: null
    }

    render () {
        const { comment, loggedInUser, deleteOwnComment } = this.props;
        const { avatar_url } = this.state;
        return (
            <div className="CommentTile-Container">
                <img src={avatar_url} alt="comment-avatar" className="CommentTile-UserAvatar"/>
                <div className="CommentTile-TextContainer">
                {loggedInUser && (comment.author === loggedInUser.username) && (
                    <button type="button" onClick={e => deleteOwnComment(comment.comment_id)} className="CommentTile-DeleteCommentButton">DELETE</button>
                )}
                    <Link to={`/profile/${comment.author}`}>
                        <h4>{comment.author}</h4>
                    </Link>
                    <p className="CommentTile-CommentBody">{comment.body}</p>
                    <Voting loggedInUser={loggedInUser} type={'comments'} id={comment.comment_id} votes={comment.votes}/>
                </div>
            </div>
        )
    }

    componentDidMount () {
        const { comment } = this.props;
        getUserInfo(comment.author)
        .then(({ avatar_url }) => {
            this.setState({ avatar_url });
        });
    };

};

export default CommentTile;