import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Home from './pages/Home';
import Topics from './pages/Topics';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Home path="/"/>
        <Topics path="/topics/*"/>
      </Router>
    </div>
  );
}

export default App;
 