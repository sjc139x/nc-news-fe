import React from 'react';

function NewArticle () {
    return (
        <div>
            <h1 id="newArticle-header">bring it to the table →</h1>
            <form className="newArticleForm">
                <input name="article-title" value="Article title..." id="article-title"  />
                <br/>
                <textarea id="article-body" value="Article body..."/>
                <br/>
                <select>
                    <option value="please-select">Please select a topic...</option>
                    <option value="recipes">Recipes</option>
                    <option value="reviews">Reviews</option>
                    <option value="top5">Top 5</option>
                    <option value="chef">Chef's Table</option>
                    <option value="healthy">Healthy Living</option>
                    <option value="treat">Treat Yo' Self</option>
                </select>
                <button id="postArticle-button">Post Article</button>
            </form>
        </div>
    )
};

export default NewArticle;
