import React from 'react';
import Header from './components/Header/Header.js';
import Cards from './components/Cards/Cards.js';
import Swipebutton from './components/SwipeButton/Swipebutton.js';
import Profile from './components/Profile/Profile.js';
import Chat from './components/Chat/Chat';
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

      <Router>
        <Switch>

          {/* Chat */}
          <Route path="/chat">
            {/* Header */}
            <Header backButton="/" />
            <Chat />
          </Route>

          {/* Cards & buttons */}
          <Route path="/">
            {/* Header */}
            <Header />
            <Cards />
            <Swipebutton />
          </Route>

        </Switch>
      </Router>


        {/* Buttons at the bottom */}

        {/* Chat */}


    </div>
  );
}

export default App;
