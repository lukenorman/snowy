import React from "react";
import { TileLayer, LayersControl } from "react-leaflet";
const { Overlay } = LayersControl;

function LayerControl() {
  return (
    <LayersControl position='topright'>
      <TileLayer
        name='Ski Resort Map'
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Overlay name='Precip'>
        <TileLayer url='https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=2be52163db534c3e9c804925d9b35213' />
      </Overlay>
      <Overlay name='Temps'>
        <TileLayer url='https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=2be52163db534c3e9c804925d9b35213' />
      </Overlay>
      <Overlay name='Snow'>
        <TileLayer url='https://tile.openweathermap.org/map/snow/{z}/{x}/{y}.png?appid=2be52163db534c3e9c804925d9b35213' />
      </Overlay>
    </LayersControl>
  );
}

export default LayerControl;
