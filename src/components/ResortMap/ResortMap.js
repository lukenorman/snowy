import React from 'react'
import { Map, Marker, TileLayer, Popup, LayersControl} from "react-leaflet"
import styled from "styled-components";
import { Resorts } from "../../constants/resorts"
import L from 'leaflet'
import "leaflet-openweathermap"
const { Overlay } = LayersControl

const MapContainer = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing:border-box;
`;

const PopUpText = styled.div`
    padding: 2px;
    font-size: 12px;
`;

const Bold = styled.span`
    font-weight:bold;
`;

const PopUpHeader = styled.div`
    padding: 2px;
    font-size: 16px;
    font-weight:bold;
    margin-bottom:10px;
`;

class ResortMap extends React.Component {

    state = {
        lat: 43,
        lng: -100.09,
        zoom: 5,
      }

    daysRemaining = resort => resort.days

    render() {
    const position = [this.state.lat, this.state.lng]

    const green = '#4AC948'
    const orange = ''
    const red = '#FA8072'
    const realRed = '#FC1501'



    const markerHtmlStyles = (color) => `
        background-color: ${color};
        width: 20px;
        height: 20px;
        display: block;
        left: -10px;
        top: -10px;
        position: relative;
        border-radius: 20px 20px 0;
        transform: rotate(45deg);
        border: 1px solid #000000;
    `

const getIcon = resort => {
    let daysRemaining = this.daysRemaining(resort)
    let color = green
    if (daysRemaining === -1 || daysRemaining >= 5) {
        //do nothing
    } else if (daysRemaining > 2) {
        color = orange
    } else if (daysRemaining === 2) {
        color = red
    } else if (daysRemaining === 1) {
        color = realRed
    }
    return L.divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 10],
        labelAnchor: [0, 10],
        popupAnchor: [0, 10],
        html: `<span style="${markerHtmlStyles(color)}" />`
    })
}
    return (
    <MapContainer>
        <Map center={position} zoom={this.state.zoom} style={{height:'600px'}}>
            <LayersControl position="topright">
                    <TileLayer name="Ski Resort Map"
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Overlay name="Precip">
                        <TileLayer url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=2be52163db534c3e9c804925d9b35213" />
                    </Overlay>
                    <Overlay name="Temps">
                        <TileLayer url="https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=2be52163db534c3e9c804925d9b35213" />
                    </Overlay>
                    <Overlay name="Snow">
                        <TileLayer url="https://tile.openweathermap.org/map/snow/{z}/{x}/{y}.png?appid=2be52163db534c3e9c804925d9b35213" />
                    </Overlay>
            </LayersControl>
            {Resorts.map(resort => resort.location ? 
                <Marker icon={getIcon(resort)} position={resort.location} key={resort.name}>
            <Popup>
                <PopUpHeader>{resort.name}</PopUpHeader>
                <PopUpText><Bold>{`Days Remaining:`}</Bold> {this.daysRemaining(resort) === -1 ? 'Unlimited' : this.daysRemaining(resort)}</PopUpText>
                <PopUpText><Bold>{`Pass:`}</Bold> {resort.pass}</PopUpText>
            </Popup>
            </Marker> : null)}
        </Map>
    </MapContainer>)
    }
}

export default ResortMap
