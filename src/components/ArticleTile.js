import React from 'react';
import { Link } from '@reach/router';

function ArticleTile ({ article }) {
    return (
        <div id="articleTileContainer">
            <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_1280.jpg" alt="berries" id="articleTileImage"/>
            <div id="articleTileText">
                <Link to={`/${article.article_id}`}>
                    <h4 className="articleTitle">{article.title}</h4>
                </Link>
                <h5 className="articleDate">{article.created_at}</h5>
                <h5 className="articleAuthor">{article.author}</h5>
            </div>
        </div>
    )
};

export default ArticleTile;