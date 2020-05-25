import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import './global.css';
import './App.css';

import mapStyles from "./mapStyles";

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

export default function App() {

  /*   const [marker,setMarker] = useState("");
  
    state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };
  
    onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  
  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  }; */

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libs,
  });

  if (loadError) return "Error Loading Maps!";
  if (!isLoaded) return "Loading Maps...";

  return (
    <div id="app">

      <aside>
        <div>
          <img src="/icons/logo3.png" alt="logo" />
          <div id="textcontent">
            <span> Acompanhe novos casos de contaminação pelo COVID-19 e contribua com doações para pessoas necessitadas em sua região! :) </span>
            <strong>Cadastre-se </strong>
            <form>

              <div className="input-block">
                <label htmlFor="endereco">Endereço (pegar sozinho)</label>
                <input
                  name="endereco"
                  id="endereco"
                  required
                  />
              </div>

              <div className="input-block">
                <label htmlFor="telefone">Telefone para contato</label>
                <input
                  name="telefone"
                  id="telefone"
                  required
                  />
              </div>

              <div className="input-block">
                <label htmlFor="Tipo">Tipo</label>
              </div>

              <div>
                <input className="radio-button"
                  type="radio"
                  name="tipo"
                  id="tipo"
                  value="alimentos"
                  required
                />
                <label className="radio-item" for="alimentos">Alimentos</label>


                <input className="radio-button"
                  type="radio"
                  name="tipo"
                  id="tipo"
                  value="produtos"
                  required
                />
                <label className="radio-item" for="produtos">Produtos de Higiene</label>

                <input className="radio-button"
                  type="radio"
                  name="tipo"
                  id="tipo"
                  value="mascaras"
                  required
                />
                <label className="radio-item" for="mascaras">Máscaras</label>

              </div>

              <button type="submit">Salvar</button>
            </form>

            {/* <button type="submit">Cadastrar caso de COVID-19</button>
            <button type="submit">Cadastrar pedido de doação</button>
            <button type="submit">Cadastrar oferta de doação</button> */}

          </div>
        </div>
      </aside>

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
              url: "/icons/need.svg",
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
              url: "/icons/virusred.svg",
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
              url: "/icons/market.svg",
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
              url: "/icons/market.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
          </Marker>

          <Marker
            position={{ lat: -22.789012, lng: -43.307846 }}

            icon={{
              url: "/icons/virusred.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
          </Marker>

          <Marker
            position={{ lat: -22.7842935, lng: -43.3099255 }}

            icon={{
              url: "/icons/cleann.svg",
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
              url: "/icons/mask.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          >
            <InfoWindow
              position={{ lat: -22.7875393, lng: -43.2974732 }} >
              <span>Doação de máscaras</span></InfoWindow>
          </Marker>

        </GoogleMap>
      </main>
    </div>
  );
}