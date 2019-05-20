import React from 'react';
import { Link } from '@reach/router';

function ArticleTile ({ article, loggedInUser, deleteArticle }) {
    return (
        <div id="articleTileContainer">
            <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_1280.jpg" alt="berries" id="articleTileImage"/>
            <div id="articleTileText">
                {loggedInUser && (article.author === loggedInUser.username) && (
                    <button type="button" onClick={e => deleteArticle(article.article_id)} id="deleteArticleButton">DELETE</button>
                )}
                <Link to={`/article/${article.article_id}`}>
                    <h4 className="articleTileTitle">{article.title}</h4>
                </Link>
                <h5 className="articleDate">{article.created_at}</h5>
                <Link to={`/profile/${article.author}`}>
                    <h5 className="articleAuthor">{article.author}</h5>
                </Link>
            </div>
        </div>
    )
};

export default ArticleTile;
