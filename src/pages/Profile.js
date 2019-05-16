import React from 'react';
import { getUserInfo, getArticlesByAuthor } from '../api-interactions';
import ArticleGrid from '../components/ArticleGrid';

class Profile extends React.Component {
    state = {
        userInfo: null,
        userArticles: null
    }
    
    render () {
        const { userInfo, userArticles } = this.state;
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
                {userArticles && <ArticleGrid articles={userArticles} />}
            </>
        )
    }

    componentDidMount () {
        const { username } = this.props;

        getUserInfo(username)
        .then(userInfo => {
            this.setState({ userInfo });
        });

        getArticlesByAuthor(username)
        .then(userArticles => {
            this.setState({ userArticles });
        })
    }
}

export default Profile;