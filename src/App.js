import React from 'react';
import Header from './components/Header/Header.js';
import Cards from './components/Cards/Cards.js';
import Swipebutton from './components/SwipeButton/Swipebutton.js';
import Profile from './components/Profile/Profile.js';
import UpdateProfile from './components/Profile/UpdateProfile.js';
import Chat from './components/Chat/Chat.js';
import ChatScreen from './components/Chat/ChatScreen.js'
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

          {/* DM */}
          <Route path="/chatscreen/:person">
            {/* Chat */}
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          {/* Chat */}
          <Route path="/chat">
            {/* Header */}
            <Header backButton="/" />
            <Chat />
          </Route>

          {/* Profile */}
          <Route path="/profile">
            {/* Header */}
            <Header backButton="/" />
            <Profile />
          </Route>

          {/* Update-Profile */}
          <Route path="/update">
            {/* Header */}
            <Header backButton="/" />
            <UpdateProfile />
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
