import React from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
// import Chat from './components/Chat/Chat.js';
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

          <Route path="/profile">
            <h1>This is profile page</h1>
          </Route>

          {/* Cards */}
          <Route path="/">
            <Cards />
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

        {/* Chat screen */}


    </div>
  );
}

export default App;
