import axios from 'axios';

export const getArticles = (pageNumber) => {
    return axios.get(`https://nc-news-sjc.herokuapp.com/api/articles?p=${pageNumber}`)
    .then(({ data: { articles } }) => {
        return articles;
    });
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

export const getArticlesBySort = (column, order) => {
    return axios.get('https://nc-news-sjc.herokuapp.com/api/articles', { params: {
        sort_by: column,
        order: order
    }})
    .then(({ data: { articles } }) => {
        return articles;
    })
}
