import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import api from '../../services/api';

import './styles.css';

import mapStyles from "../../mapStyles";


import logoImg from '../../assets/logo3.png'

const libs = ["places"]; 
const mapContainerStyle = {
  width: '50vw',
  height: '80vh',
};
const center = {
  lat: -22.7939749,
  lng: -43.2967311,
};
const options = {
  styles: mapStyles,
  disableDefault: true,
};




export default function Logon() {
    
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libs,
  });

  if (loadError) return "Error Loading Maps!";
  if (!isLoaded) return "Loading Maps...";

    return (
     <div className="logon-container">
         <section className="form">
         <img src={logoImg} width="450" height="144" alt="Be The Hero" />
        
       
           
          
         <Link to="/register"><button className="button" type="submit" > Cadastrar pedido de ajuda </button></Link>
            <button className="button" type="submit" > Cadastrar suspeita de caso </button>
           
      
 

         </section>
       

         <section className="map">
         <main>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          options={options}
        >

          <Marker
            position={{ lat: -22.7855032, lng: -43.2972791 }}
            icon={{
              url: "../../assets/need.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
            <InfoWindow
              position={{ lat: -22.7855032, lng: -43.2972791 }} >
              <span>Pedido de doação! / Tipo: Alimentos /Contato: (21)9 9987-9999</span></InfoWindow>
          </Marker>

          <Marker
            position={{ lat: -22.7900245, lng: -43.3069888 }}
            icon={{
              url: "../../assets/virusred.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
            <InfoWindow
              position={{ lat: -22.7900245, lng: -43.3069888 }} >
              <span>Caso suspeito. Cuidado!</span></InfoWindow>
          </Marker>

          <Marker
            position={{ lat: -22.793975, lng: -43.296731 }}

            icon={{
              url: "../../assets/market.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
            <InfoWindow
              position={{ lat: -22.793975, lng: -43.296731 }} >
              <span>Doação de alimentos</span></InfoWindow>
          </Marker>

          <Marker
            position={{ lat: -22.7980715, lng: -43.3175383 }}

            icon={{
              url: "../../assets/market.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
          </Marker>

          <Marker
            position={{ lat: -22.789012, lng: -43.307846 }}

            icon={{
              url: "../../assets/virusred.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
          </Marker>

          <Marker
            position={{ lat: -22.7842935, lng: -43.3099255 }}

            icon={{
              url: "../../assets/cleann.svg",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          >
            <InfoWindow
              position={{ lat: -22.7842935, lng: -43.3099255 }} >
              <span>Doação de produtos de higiene</span></InfoWindow>
          </Marker>

          <Marker
            position={{ lat: -22.7875393, lng: -43.2974732 }}

            icon={{
              url: "../../assets/mask.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
            <InfoWindow
              position={{ lat: -22.7875393, lng: -43.2974732 }} >
              <span>Doação de máscaras</span></InfoWindow>
          </Marker>

        </GoogleMap>
      </main>
      </section>

     </div>

   
    );
}