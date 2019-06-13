import axios from "axios";

export const getArticlesByPage = pageNumber => {
  return axios
    .get(`https://nc-news-sjc.herokuapp.com/api/articles?p=${pageNumber}`)
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch(err => console.log(err));
};

export const getArticlesLength = () => {
  return axios
    .get("https://nc-news-sjc.herokuapp.com/api/articles")
    .then(({ data: { total_count } }) => {
      return total_count;
    })
    .catch(err => console.log(err));
};

export const getSingleArticle = article_id => {
  return axios
    .get(`https://nc-news-sjc.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    })
    .catch(err => console.log(err));
};

export const getArticlesByTopic = topic => {
  return axios
    .get("https://nc-news-sjc.herokuapp.com/api/articles", {
      params: {
        topic: topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch(err => console.log(err));
};

export const getArticlesByAuthor = author => {
  return axios
    .get("https://nc-news-sjc.herokuapp.com/api/articles", {
      params: {
        author: author
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch(err => console.log(err));
};

export const getArticlesBySort = (column, order) => {
  return axios
    .get("https://nc-news-sjc.herokuapp.com/api/articles", {
      params: {
        sort_by: column,
        order: order
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch(err => console.log(err));
};

export const postArticle = (title, body, author, topic) => {
  return axios
    .post("https://nc-news-sjc.herokuapp.com/api/articles", {
      title: title,
      body: body,
      author: author,
      topic: topic
    })
    .then(({ data: { article } }) => {
      return article;
    })
    .catch(err => console.log(err));
};

export const getComments = article_id => {
  return axios
    .get(
      `https://nc-news-sjc.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    })
    .catch(err => console.log(err));
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(
      `https://nc-news-sjc.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username: username,
        body: body
      }
    )
    .then(({ data: { comment } }) => {
      return comment;
    })
    .catch(err => console.log(err));
};

export const removeComment = comment_id => {
  return axios
    .delete(`https://nc-news-sjc.herokuapp.com/api/comments/${comment_id}`)
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};

export const removeArticle = article_id => {
  return axios
    .delete(`https://nc-news-sjc.herokuapp.com/api/articles/${article_id}`)
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};

export const getUserInfo = username => {
  return axios
    .get(`https://nc-news-sjc.herokuapp.com/api/users/${username}`)
    .then(({ data: { user } }) => {
      return user;
    })
    .catch(err => console.log(err));
};

export const postUserInfo = username => {
  return axios
    .post(`https://nc-news-sjc.herokuapp.com/api/users`, {
      username: username,
      avatar_url: "https://i.ibb.co/3hCVGwM/iconfinder-38-456512.png"
    })
    .then(({ data: { user } }) => {
      return user;
    })
    .catch(err => console.log(err));
};

export const alterVotes = (type, id, integer) => {
  return axios
    .patch(`https://nc-news-sjc.herokuapp.com/api/${type}/${id}`, {
      inc_votes: integer
    })
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log(err));
};
