import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Login from './components/Login';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Router>
      <Switch>
          <Route path="/">
            <Body />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
