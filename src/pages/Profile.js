import React from 'react';
import ArticleGrid from '../components/ArticleGrid';
import { navigate } from '@reach/router';
import { getUserInfo, getArticlesByAuthor, removeArticle } from '../api-interactions';

class Profile extends React.Component {
    state = {
        userInfo: null,
        userArticles: null
    }
    
    render () {
        const { userInfo, userArticles } = this.state;
        const { loggedInUser } = this.props;
        return (
            <>
            <div className="profileTile">
                {userInfo && (
                        <>
                        <img src={userInfo.avatar_url} alt="avatar" className="avatarImage"/>
                        <div className="profileTileText">
                            <h1>{userInfo.username}</h1>
                            <h3>Food Enthusiast</h3>
                            <p id="profileDesc">I like food a lot, it tastes nice and it also it makes me happy. I love to cook but I do not love to do the washing up. Let's make a deal: if you do the washing up, I'll cook for you.</p>
                        </div>
                        </>
                )}
            </div>
                <h3 id="myArticles">My Articles...</h3>
                {userArticles && <ArticleGrid articles={userArticles} loggedInUser={loggedInUser} deleteOwnArticle={this.deleteOwnArticle} />}
            </>
        )
    }

    // {articles && <ArticleGrid articles={articles} loggedInUser={loggedInUser} deleteArticle={this.deleteArticle} />}

    componentDidMount () {
        const { username } = this.props;

        getUserInfo(username)
        .then(userInfo => {
            this.setState({ userInfo });
        })
        .catch(({ response }) => {
            navigate("/oops", { replace: true, state: {
                code: response.status,
                msg: response.data.msg
            }});
        });

        getArticlesByAuthor(username)
        .then(userArticles => {
            this.setState({ userArticles });
        })
    }

    deleteOwnArticle = (article_id) => {
        removeArticle(article_id)
        .then(res => {
            this.setState(prevState => ({
                userArticles: prevState.userArticles.filter(userArticle => userArticle.article_id !== article_id)
            }))
        })
    }

}

export default Profile;