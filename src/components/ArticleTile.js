import React from 'react';
import { Link } from '@reach/router';
import moment from 'moment';

function ArticleTile ({ article, loggedInUser, deleteOwnArticle }) {
    return (
        <div id="articleTileContainer">
            <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_1280.jpg" alt="berries" id="articleTileImage"/>
            <div id="articleTileText">
                {loggedInUser && (article.author === loggedInUser.username) && (
                    <button type="button" onClick={e => deleteOwnArticle(article.article_id)} id="deleteArticleButton">DELETE</button>
                )}
                <Link to={`/article/${article.article_id}`}>
                    <h4 className="articleTileTitle">{article.title}</h4>
                </Link>
                <h5 className="articleDate">{moment(article.created_at).format("MMM Do YY")}</h5>
                <Link to={`/profile/${article.author}`}>
                    <h5 className="articleAuthor">{article.author}</h5>
                </Link>
            </div>
        </div>
    )
};

export default ArticleTile;
