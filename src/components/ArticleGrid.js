import React from 'react';
import ArticleTile from './ArticleTile';

function ArticleGrid ({ articles, loggedInUser, deleteOwnArticle }) {
    return (
    <ul>
        {articles.map(article => {
            return <li className="ArticleGrid-ListItems" key={article.article_id}>
                <ArticleTile article={article} loggedInUser={loggedInUser} deleteOwnArticle={deleteOwnArticle} />
            </li>
        })}
     </ul>
    )
};

export default ArticleGrid;