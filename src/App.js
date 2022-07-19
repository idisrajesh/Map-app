import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import MapComponent from './component/map/map';
function App() {

  return (
    <div  className='App' style={{ width: '100vw', height: '100vh' }}>
      <MapComponent/>
    </div>
    
      
  );
}

export default App;
