import React from 'react';
import Header from './components/Header/Header.js';
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

          <Route path="/chat">
            <h1>This is chatpage</h1>
          </Route>

          <Route path="/">
            <h1>This is homepage</h1>
          </Route>

        </Switch>
      </Router>



        {/* Cards */}

        {/* Buttons at the bottom */}

        {/* Chat screen */}


    </div>
  );
}

export default App;
