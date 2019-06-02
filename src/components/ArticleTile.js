import React from "react";
import { Link } from "@reach/router";
import moment from "moment";

function ArticleTile({ article, loggedInUser, deleteOwnArticle }) {
  return (
    <div className="ArticleTile-Container">
      <img
        src={article.image}
        alt="background_tile_food_image"
        className="ArticleTile-Image"
      />
      <div className="ArticleTile-Text">
        {loggedInUser && article.author === loggedInUser.username && (
          <button
            type="button"
            onClick={e => deleteOwnArticle(article.article_id)}
            className="ArticleTile-DeleteButton"
          >
            DELETE
          </button>
        )}
        <Link to={`/article/${article.article_id}`}>
          <h4 className="ArticleTile-Title">{article.title}</h4>
        </Link>
        <h5 className="ArticleTile-Date">
          {moment(article.created_at, "YYYYMMDD").fromNow()}
        </h5>
        •
        <Link to={`/profile/${article.author}`}>
          <h5 className="ArticleTile-Author">{article.author}</h5>
        </Link>
      </div>
    </div>
  );
}

export default ArticleTile;
