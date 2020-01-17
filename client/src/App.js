import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar.js';
import MapContainer from './Components/MapContainer.js';
import Footer from './Components/Footer.js';
import Signup from './Components/Signup';
// TODO: Create / Add a Login Page

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
            <Route path="/home">
              <MapContainer />  
            </Route>
            <Route path="/login">
                <Register />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

// function Login() {
//     return ;
// }
  
function Register() {
  return <Signup />;
}

export default App;
