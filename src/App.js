import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import AllArticles from "./pages/AllArticles";
import Recipes from "./pages/Recipes";
import Reviews from "./pages/Reviews";
import TopFive from "./pages/TopFive";
import ChefLife from "./pages/ChefLife";
import Healthy from "./pages/Healthy";
import Treats from "./pages/Treats";
import SingleArticle from "./pages/SingleArticle";
import Profile from "./pages/Profile";
import LogInOverlay from "./components/LogInOverlay";
import Error from "./pages/Error";
import NewArticle from "./pages/NewArticle";
import SignUpOverlay from "./components/SignUpOverlay";
import { getUserInfo, postUserInfo } from "./api-interactions";

class App extends React.Component {
  state = {
    logInButtonClicked: false,
    logIn_usernameInput: "e.g. hire-me-lol→",
    loggedInUser: null,
    errorOnRequest: false,
    signUpButtonClicked: false,
    signUp_usernameInput: "username"
  };

  render() {
    const {
      logInButtonClicked,
      signUpButtonClicked,
      logIn_usernameInput,
      signUp_usernameInput,
      loggedInUser,
      errorOnRequest
    } = this.state;
    return (
      <div className="App">
        <Header
          toggleLogInBox={this.toggleLogInBox}
          toggleSignUpBox={this.toggleSignUpBox}
          loggedInUser={loggedInUser}
          logOutUser={this.logOutUser}
        />
        <Router>
          <AllArticles path="/" loggedInUser={loggedInUser} />
          <SingleArticle
            path="/article/:article_id"
            loggedInUser={loggedInUser}
          />
          <Recipes path="/recipes" loggedInUser={loggedInUser} />
          <Reviews path="/reviews" loggedInUser={loggedInUser} />
          <TopFive path="/top5" loggedInUser={loggedInUser} />
          <ChefLife path="/chef" loggedInUser={loggedInUser} />
          <Healthy path="/healthy" loggedInUser={loggedInUser} />
          <Treats path="/treats" loggedInUser={loggedInUser} />
          <Profile path="/profile/:username" loggedInUser={loggedInUser} />
          <NewArticle path="new-article" loggedInUser={loggedInUser} />
          <Error default path="oops" />
        </Router>
        {logInButtonClicked && (
          <LogInOverlay
            toggleLogInBox={this.toggleLogInBox}
            logInUser={this.logInUser}
            handleTyping={this.handleLogInTyping}
            handleClick={this.handleLogInClick}
            usernameInput={logIn_usernameInput}
            errorOnRequest={errorOnRequest}
          />
        )}
        {signUpButtonClicked && (
          <SignUpOverlay
            toggleSignUpBox={this.toggleSignUpBox}
            signUpUser={this.signUpUser}
            handleTyping={this.handleSignUpTyping}
            handleClick={this.handleSignUpClick}
            usernameInput={signUp_usernameInput}
            errorOnRequest={errorOnRequest}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty("loggedInUser")) {
      let user = JSON.parse(localStorage.getItem("loggedInUser"));
      this.setState({ loggedInUser: user });
    }
  }

  toggleLogInBox = () => {
    this.setState(prevState => ({
      logInButtonClicked: !prevState.logInButtonClicked
    }));
    this.setState({ logIn_usernameInput: "e.g. hire me lol" });
  };

  toggleSignUpBox = () => {
    this.setState(prevState => ({
      signUpButtonClicked: !prevState.signUpButtonClicked
    }));
    this.setState({ signUp_usernameInput: "username" });
  };

  handleLogInTyping = event => {
    this.setState({ logIn_usernameInput: event.target.value });
    this.setState({ errorOnRequest: false });
  };

  handleSignUpTyping = event => {
    this.setState({ signUp_usernameInput: event.target.value });
    this.setState({ errorOnRequest: false });
  };

  logInUser = event => {
    const { logIn_usernameInput } = this.state;
    event.preventDefault();
    getUserInfo(logIn_usernameInput)
      .then(user => {
        this.setState({ loggedInUser: user });
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        this.setState({ logIn_usernameInput: "e.g. hire-me-lol" });
        this.toggleLogInBox();
      })
      .catch(error => {
        this.setState({ errorOnRequest: true });
      });
  };

  logOutUser = () => {
    this.setState({ loggedInUser: null });
    localStorage.clear("loggedInUser");
  };

  signUpUser = event => {
    const { signUp_usernameInput } = this.state;
    event.preventDefault();
    postUserInfo(signUp_usernameInput)
      .then(user => {
        this.setState({ loggedInUser: user });
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        this.setState({ signUp_usernameInput: "username" });
        this.toggleSignUpBox();
      })
      .catch(error => {
        this.setState({ errorOnRequest: true });
      });
  };

  handleLogInClick = () => {
    this.setState({ logIn_usernameInput: "" });
  };

  handleSignUpClick = () => {
    this.setState({ signUp_usernameInput: "" });
  };
}

export default App;
