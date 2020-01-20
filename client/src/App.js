import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar.js';
import MapContainer from './Components/MapContainer.js';
import Footer from './Components/Footer.js';
import Register from './Components/Register';
import Login from './Components/Login';
import Listing from './Components/Listing';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Listing />
        
        <Switch>
            <Route path="/" exact component={MapContainer} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
