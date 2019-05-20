import React from 'react';
import { navigate }  from '@reach/router';
import { postArticle } from '../api-interactions';

class NewArticle extends React.Component {
    state = {
        titleInput: 'title →',
        bodyInput: 'body →',
        topicInput: ''
    }
    
    render () {
        const { titleInput, bodyInput } = this.state;
        return (
            <div>
                <h1 id="newArticle-header">bring it to the table →</h1>
                <form className="newArticleForm">
                    <input name="article-title" value={titleInput} onClick={this.handleClick} onChange={this.handleTyping} id="article-title"  />
                    <br/>
                    <textarea name="article-body" id="article-body" value={bodyInput} onClick={this.handleClick} onChange={this.handleTyping} />
                    <br/>
                    <select onChange={this.handleTopicSelect}>
                        <option value="please-select">Please select a topic...</option>
                        <option value="recipes">Recipes</option>
                        <option value="reviews">Reviews</option>
                        <option value="top 5">Top 5</option>
                        <option value="chef life">Chef's Table</option>
                        <option value="healthy">Healthy Living</option>
                        <option value="treats">Treat Yo' Self</option>
                    </select>
                    <button type="submit" onClick={this.postArticle} id="postArticle-button">Post Article</button>
                </form>
            </div>
        )
    }

    handleClick = (event) => {
        if (event.target.name === 'article-title') this.setState({ titleInput: '' });
        else if (event.target.name === 'article-body') this.setState({ bodyInput: '' });
    }

    handleTyping = (event) => {
        if (event.target.name === 'article-title') this.setState({ titleInput: event.target.value });
        else if (event.target.name === 'article-body') this.setState({ bodyInput: event.target.value });
    }

    handleTopicSelect = (event) => {
        this.setState({ topicInput: event.target.value });
    } 

    postArticle = (event) => {
        const { titleInput, bodyInput, topicInput } = this.state;
        const { loggedInUser } = this.props;
        event.preventDefault();
        postArticle(titleInput, bodyInput, loggedInUser.username, topicInput)
        .then(newArticle => {
            navigate(`/article/${newArticle.article_id}`);
        });
    }
};

export default NewArticle;
