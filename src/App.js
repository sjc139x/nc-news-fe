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
import { getUserInfo } from './api-interactions';

class App extends React.Component {
  state = {
    logInButtonClicked: false,
    signUpButtonClicked: false,
    usernameInput: '',
    loggedInUser: null,
    errorOnLogIn: false
  }
  
  render () {
    const { logInButtonClicked, signUpButtonClicked, usernameInput, loggedInUser, errorOnLogIn } = this.state;
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
          <Error default path="oops" />
        </Router>
        {logInButtonClicked && <LogInOverlay toggleLogInBox={this.toggleLogInBox} toggleSignUpBox={this.toggleSignUpBox} logInUser={this.logInUser} handleTyping={this.handleTyping} usernameInput={usernameInput} errorOnLogIn={errorOnLogIn} />}
      </div>
    );
  }
  
  toggleLogInBox = () => {
    this.setState(prevState => ({
      logInButtonClicked: !prevState.logInButtonClicked
    }));
  }

  toggleSignUpBox = () => {
    this.setState(prevState => ({
      signUpButtonClicked: !prevState.signUpButtonClicked
    }));
  }

  handleTyping = (event) => {
    this.setState({ usernameInput: event.target.value });
  }

  logInUser = (event) => {
    const { usernameInput } = this.state;
    getUserInfo(usernameInput)
    .then(user => {
      this.setState({ loggedInUser: user });
    })
    .catch(error => {
      this.setState({ errorOnLogIn: true });
    })
  }

  logOutUser = () => {
    this.setState({ loggedInUser: null });
  }

}

export default App;
 