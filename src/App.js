import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import AllArticles from './pages/AllArticles';
import Recipes from './pages/Recipes';
import Reviews from './pages/Reviews';
import TopFive from './pages/TopFive';
import ChefLife from './pages/ChefLife';
import Healthy from './pages/Healthy';
import Treats from './pages/Treats';
import SingleArticle from './pages/SingleArticle';
import Profile from './pages/Profile';
import LogInOverlay from './components/LogInOverlay';
import Error from './pages/Error';
import NewArticle from './pages/NewArticle'
import SignUpOverlay from './components/SignUpOverlay';
import { getUserInfo, postUserInfo } from './api-interactions';

class App extends React.Component {
  state = {
    logInButtonClicked: false,
    usernameInput: 'username →',
    loggedInUser: null,
    errorOnRequest: false,
    signUpButtonClicked: false,
    signUp_usernameInput: 'username →'
  }
  
  render () {
    const { logInButtonClicked, signUpButtonClicked, usernameInput, loggedInUser, errorOnRequest } = this.state;
    return (
      <div className="App">
        <Header toggleLogInBox={this.toggleLogInBox} toggleSignUpBox={this.toggleSignUpBox} loggedInUser={loggedInUser} logOutUser={this.logOutUser}/>
        <Router>
          <AllArticles path="/"/>
          <SingleArticle path="/article/:article_id" loggedInUser={loggedInUser}/>
          <Recipes path="/recipes"/>
          <Reviews path="/reviews"/>
          <TopFive path="/top5"/>
          <ChefLife path="/chef"/>
          <Healthy path="/healthy"/>
          <Treats path="/treats"/>
          <Profile path="/profile/:username" />
          <NewArticle path="new-article" />
          <Error default path="oops" />
        </Router>
        {logInButtonClicked && <LogInOverlay toggleLogInBox={this.toggleLogInBox} logInUser={this.logInUser} handleTyping={this.handleTyping} handleClick={this.handleClick} usernameInput={usernameInput} errorOnRequest={errorOnRequest} />}
        {signUpButtonClicked && <SignUpOverlay toggleSignUpBox={this.toggleSignUpBox} signUpUser={this.signUpUser} handleTyping={this.handleTyping} handleClick={this.handleClick} usernameInput={usernameInput} errorOnRequest={errorOnRequest} />}
      </div>
    );
  }

  componentDidMount () {
    if (localStorage.hasOwnProperty("loggedInUser")) {
      let user = JSON.parse(localStorage.getItem("loggedInUser"));
      this.setState({ loggedInUser: user });
    }
  }
  
  toggleLogInBox = () => {
    this.setState(prevState => ({
      logInButtonClicked: !prevState.logInButtonClicked
    }));
    this.setState({ usernameInput: 'username →' });
  }

  toggleSignUpBox = () => {
    this.setState(prevState => ({
      signUpButtonClicked: !prevState.signUpButtonClicked
    }));
  }

  handleTyping = (event) => {
    this.setState({ usernameInput: event.target.value });
    this.setState({ errorOnRequest: false });
  }

  logInUser = (event) => {
    const { usernameInput } = this.state;
    event.preventDefault();
    getUserInfo(usernameInput)
    .then(user => {
      this.setState({ loggedInUser: user });
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      this.setState({ usernameInput: '' });
      this.toggleLogInBox();
    })
    .catch(error => {
      this.setState({ errorOnRequest: true });
    })
  }

  logOutUser = () => {
    this.setState({ loggedInUser: null });
    localStorage.clear("loggedInUser");
  }

  signUpUser = (event) => {
    const { usernameInput } = this.state;
    event.preventDefault();
    postUserInfo(usernameInput)
    .then(user => {
      this.setState({ loggedInUser: user });
      this.setState({ usernameInput: '' });
      this.toggleSignUpBox();
    })
    .catch(error => {
      this.setState({ errorOnRequest: true });
    })
  }

  handleClick = () => {
    this.setState({ usernameInput: '' });
  }

}

export default App;
 