import React from 'react';
import ArticleTile from './ArticleTile';

function ArticleGrid ({ articles, loggedInUser }) {
    return (
    <ul>
        {articles.map(article => {
            return <li id="articleTileListItem" key={article.article_id}>
                <ArticleTile article={article} loggedInUser={loggedInUser} />
            </li>
        })}
     </ul>
    )
};

export default ArticleGrid;