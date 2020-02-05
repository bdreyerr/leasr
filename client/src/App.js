import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar.js';
// import MapContainer from './Components/MapContainer.js';
import Footer from './Components/Footer.js';
import Register from './Components/Register';
import Login from './Components/Login';
import Jumbo from './Components/Home/Jumbo';
import Search from './Components/Listing';
import About from './Components/Extras/About';
import Meet from './Components/Extras/Meet';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />


        <Switch>
            <Route path="/" exact component={Jumbo} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/search" exact component={Search} />
            <Route path="/about" exact component={About} />
            <Route path="/meet" exact component={Meet} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
