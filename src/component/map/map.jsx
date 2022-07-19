import React, { useRef, useEffect } from "react";
import { loadModules } from "esri-loader";
import { Map } from "@esri/react-arcgis";

// hooks allow us to create a map component as a function
function MapComponent() {
  // create a ref to element to be used as the map's container
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
  return  <Map
  mapProperties={{ basemap: "streets-vector" }}
  viewProperties={{ center: [-90, 38] }}
  loaderOptions={{ version: "4.17", css: true }}
  onLoad={handleMapLoad}
/>
}


export default MapComponent
