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

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AllArticles path="/"/>
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

export default App;
 