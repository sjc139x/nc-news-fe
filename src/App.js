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

class App extends React.Component {
  state = {
    logInButtonClicked: false,
    signUpButtonClicked: false,
    loggedInUser: null
  }
  
  render () {
    const { logInButtonClicked, signUpButtonClicked } = this.state;
    return (
      <div className="App">
        <Header toggleLogInBox={this.toggleLogInBox} toggleSignUpBox={this.toggleSignUpBox}/>
        <Router>
          <AllArticles path="/" logInButtonClicked={logInButtonClicked} signUpButtonClicked={signUpButtonClicked}/>
          <SingleArticle path="/article/:article_id"/>
          <Recipes path="/recipes"/>
          <Reviews path="/reviews"/>
          <TopFive path="/top5"/>
          <ChefLife path="/chef"/>
          <Healthy path="/healthy"/>
          <Treats path="/treats"/>
          <Profile path="/profile/:username" />
        </Router>
      </div>
    );
  }

  
  toggleLogInBox = () => {
    this.setState(prevState => ({
      logInButtonClicked: !prevState.logInButtonClicked
    }));
  }

  // toggleSignUpBox = () => {
  //   this.setState(prevState => ({
  //     signUpButtonClicked: !prevState.signUpButtonClicked
  //   }));
  // }

  // logInUser = () => {
  //   console.log('ur logged in...NOT...hahahhahaa')
  // }

}

export default App;
 