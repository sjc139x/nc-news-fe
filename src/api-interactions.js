import axios from 'axios';

function getArticles (topic) {
    return axios.get('https://nc-news-sjc.herokuapp.com/api/articles', { params: {
        topic: topic
    }})
    .then(({ data: { articles } } ) => {
        return articles;
    });
}

export default getArticles;