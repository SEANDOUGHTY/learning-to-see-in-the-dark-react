import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Project from './components/Project';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/projects/learning-to-see-in-the-dark">
            <Project />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
