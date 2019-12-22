import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import Map from './Components/Map.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
