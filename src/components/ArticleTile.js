import React from 'react';

function ArticleTile ({ article }) {
    return (
        <div id="articleTileContainer">
        {console.log(article)}
            <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_1280.jpg" alt="berries" id="articleTileImage"/>
            <h5 className="articleTitle">{article.title}</h5>
        </div>
    )
};

export default ArticleTile;