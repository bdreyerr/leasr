import React from 'react';
import AppliedRoute from "./components/AppliedRoute";

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AppliedRoute path="/" exact component={Home} appProps={appProps} />
        <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
        <Route component={NotFound} />
      </Switch>
    );
}