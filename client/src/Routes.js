import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';
import Register from './Components/Register';
import Login from './Components/Login';
import Jumbo from './Components/Home/Jumbo';
import Search from './Components/Listing';
import About from './Components/Extras/About';
import Meet from './Components/Extras/Meet';
import NotFound from "./NotFound.js";

export default function Routes() {
  return (
      <div>
        <NavBar />
        <Switch>
            <Route path="/" exact component={Jumbo} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/search" exact component={Search} />
            <Route path="/about" exact component={About} />
            <Route path="/meet" exact component={Meet} />

            <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
  );
}