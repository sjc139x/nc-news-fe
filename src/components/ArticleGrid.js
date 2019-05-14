import React from 'react';
import ArticleTile from './ArticleTile';

function ArticleGrid ({ articles }) {
    return (
    <ul>
        {articles.map(article => {
            return <li id="articleTileListItem" key={article.article_id}>
                <ArticleTile article={article}/>
            </li>
        })}
     </ul>
    )
};

export default ArticleGrid;