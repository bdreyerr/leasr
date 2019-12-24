import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import MapContainer from './Components/MapContainer.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MapContainer/>
      <Footer/>
    </div>
  );
}

export default App;
