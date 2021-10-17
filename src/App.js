import React from 'react';
import Header from './components/Header/Header.js';
import Cards from './components/Cards/Cards.js';
import Swipebutton from './components/SwipeButton/Swipebutton.js';
import Profile from './components/Profile/Profile.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      <Router>
        <Switch>

          {/* Profile */}
          <Route path="/profile">
            <Profile />
          </Route>

          {/* Cards */}
          <Route path="/">
            <Cards />

            {/* Swipe Buttons */}
            <Swipebutton />
          </Route>



          {/* 
          <Route path="/chat">
            <Chat />
          </Route>
          */}

          <Route path="/">
            <h1>This is homepage</h1>
          </Route>

        </Switch>
      </Router>


        {/* Buttons at the bottom */}

        {/* Chat */}


    </div>
  );
}

export default App;
