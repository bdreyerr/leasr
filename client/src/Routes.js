import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from './Components/Footer.js';
import Register from './Components/Register';
import Login from './Components/Login';
import Jumbo from './Components/Home/Jumbo';
import Search from './Components/Listing';
import About from './Components/Extras/About';
import Meet from './Components/Extras/Meet';
import NotFound from "./NotFound.js";
import AppliedRoute from "./Components/AppliedRoute";

export default function Routes({ appProps }) {
  return (
      <div>
        <Switch>
            <AppliedRoute path="/" exact component={Jumbo} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            <AppliedRoute path="/register" exact component={Register} appProps={appProps} />
            <AppliedRoute path="/search" exact component={Search} appProps={appProps} />
            <AppliedRoute path="/about" exact component={About} appProps={appProps} />
            <AppliedRoute path="/meet" exact component={Meet} appProps={appProps} />

            <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
  );
}