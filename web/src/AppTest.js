import React, {useState} from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
//import {formatRelative} from "date-fns";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libs = ["places"]; //evitar renderizar d+
const mapContainerStyle = {
  width: '80vw',
  height: '80vh',
};

const center = {
  lat: -22.7939749,
  lng: -43.2967311,
};
const options = {
  styles: mapStyles,
  disableDefault: true,
  //zoomControl: true,
};

export default function App() {

  let [showInfoWindow, setInfoWindow] = useState(false);
  

 /*  onMarkerClick = (props, marker) =>
  this.setState({
    activeMarker: marker,
    selectedPlace: props,
    showingInfoWindow: true
  }); */

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libs,
  });

  if (loadError) return "Error Loading Maps!";
  if (!isLoaded) return "Loading Maps...";

  
  return (
  <div>
    <h1>ola</h1>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      options={options}
      >
<Marker 
  position={{lat: -22.7922996, lng:-43.3027512}} 
  onMouseOver = 
      { console.log("passou"),
      <InfoWindow
      position={{lat:-22.7922996, lng:-43.3027512}}
      >
      <span>Caso suspeito!</span>
      </InfoWindow>
      }
/>
<Marker
 position={{lat:-22.7900245, lng:-43.3069888}} 
 icon={{
  url:"/icons/virusred.svg",
  scaledSize: new window.google.maps.Size(30,30),
}}
onClick={ () => setInfoWindow(showInfoWindow=true),
console.log("escreveste")
} 
>
  <InfoWindow
  position={{lat:-22.7900245, lng:-43.3069888}} >
    <span>Caso suspeito!</span></InfoWindow>
</Marker>
    </GoogleMap>
  </div>
  );
}