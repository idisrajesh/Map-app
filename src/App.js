import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import { loadModules } from "esri-loader";
import { Map } from "@esri/react-arcgis";
function App() {
  const handleMapLoad = function (map, view) {
    loadModules(["esri/widgets/Search","esri/widgets/Home"]).
    then(([Search,Home,GeoJSONLayer]) => {
      const searchWidget = new Search({
        view: view
      });
      const homeBtn = new Home({
        view: view
      });
      view.ui.add(homeBtn, "top-left");
      view.ui.add(searchWidget, {
        position: "top-right"
      });
    });
  };

  return (
    <div  className='App' style={{ width: '100vw', height: '100vh' }}>
      <Map/>
    </div>
    
      
  );
}

export default App;
