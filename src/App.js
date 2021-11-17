import React from 'react';
import Header from './components/Header/Header.js';
import Cards from './components/Cards/Cards.js';
import Profile from './components/Profile/Profile.js';
import Inbox from './components/Chat/Inbox.js';
import UpdateProfile from './components/Profile/UpdateProfile.js';
import ChatScreen from './components/Chat/ChatScreen.js';
import Auth from './components/Authentication/Auth.js';
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

          {/* ChatScreen */}
          <Route path="/chatscreen/">
            {/* Chat */}
            <Header backButton="/inbox"/>
            <ChatScreen />
          </Route>

          {/* DM/Inbox */}
          <Route path="/inbox">
            {/* Header */}
            <Header backButton="/" />
            <Inbox />
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
            <Header backButton="/profile" />
            <UpdateProfile />
          </Route>

          {/* Login  */}
          <Route path="/login">
            {/* Header */}
            <Header />
            <Auth />
          </Route>

          {/* Cards */}
          <Route path="/">
            {/* Header */}
            <Header />
            <Cards />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
