import axios from 'axios';

export const getArticles = pageNumber => {
    return axios.get(`https://nc-news-sjc.herokuapp.com/api/articles?p=${pageNumber}`)
    .then(({ data: { articles } }) => {
        return articles;
    });
}

export const postArticle = (title, body, author, topic) => {
    return axios.post('https://nc-news-sjc.herokuapp.com/api/articles', {
        title: title,
        body: body,
        author: author,
        topic: topic
    })
    .then(({ data: { article } }) => {
        return article;
    })
}

export const getArticlesByTopic = topic => {
    return axios.get('https://nc-news-sjc.herokuapp.com/api/articles', { params: {
        topic: topic
    }})
    .then(({ data: { articles } } ) => {
        return articles;
    });
}

export const getArticlesByAuthor = author => {
    return axios.get('https://nc-news-sjc.herokuapp.com/api/articles', { params: {
        author: author
    }})
    .then(({ data: { articles } } ) => {
        return articles;
    });
}

export const getUserInfo = username => {
    return axios.get(`https://nc-news-sjc.herokuapp.com/api/users/${username}`)
    .then(({ data: { user } }) => {
        return user;
    });
}

export const postUserInfo = username => {
    return axios.post(`https://nc-news-sjc.herokuapp.com/api/users`, {
        username: username,
        avatar_url: 'https://i.ibb.co/3hCVGwM/iconfinder-38-456512.png'
    })
    .then(({ data: { user } }) => {
        return user;
    });
}

export const getArticlesBySort = (column, order) => {
    return axios.get('https://nc-news-sjc.herokuapp.com/api/articles', { params: {
        sort_by: column,
        order: order
    }})
    .then(({ data: { articles } }) => {
        return articles;
    })
}
