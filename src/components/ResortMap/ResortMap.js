import React from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import styled from "styled-components";
import { Resorts } from "../../constants/resorts"

const MapContainer = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing:border-box;
`;

class ResortMap extends React.Component {

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      }

    render() {
    const position = [this.state.lat, this.state.lng]
    return (
    <MapContainer>
        <Map center={position} zoom={this.state.zoom} style={{height:'600px'}}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        {Resorts.map(resort => resort.location ? 
            <Marker position={resort.location}>
          <Popup>
            {resort.name}
          </Popup>
        </Marker> : null)}
        </Map>
    </MapContainer>)
    }
}

export default ResortMap
