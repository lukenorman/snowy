import React, {useEffect, useState} from 'react'
import { Map, Marker, TileLayer, Popup, LayersControl} from "react-leaflet"
import styled from "styled-components";
import { Resorts } from "../../constants/resorts"
import { Days } from "../../constants/days"
import Distance from "./Distance"
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

function ResortMap() {

    const lat = 43
    const lng = -100.09
    const zoom = 5
    const position = [lat, lng]
    const green = '#4AC948'
    const orange = '#FFA500'
    const red = '#FA8072'
    const realRed = '#FC1501'

    const [location, setLocation] = useState(null)

    useEffect(() => {
        console.log("Setting up location")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(`Updating location`)
                setLocation(position.coords)
            }, 
            error => {
                console.log(error)
            },
            {timeout: 10000})
        } else {
            console.log("Location sensing not enabled")
        }
    }, [setLocation])

    const daysSkied = resort => {
        let daysUsed = Days.filter(day => day.resort === resort.name)
        return daysUsed.length
    }

    const daysRemaining = resort => {
        const initialDays = resort.days
        let remainingDays = (initialDays === -1) ? initialDays : initialDays - daysSkied(resort)
        if (resort.subpass) {
            const subpassResorts = Resorts.filter(r => (r.subpass === resort.subpass) && (r.name !== resort.name))
            for (let subpassResort of subpassResorts) {
                let subpassDaysUsed = Days.filter(day => day.resort === subpassResort.name)
                remainingDays -= subpassDaysUsed.length
            }
        }
        return remainingDays
    }

    const updateLocation = e => {
        const latLng = e.target.getLatLng()
        setLocation({'latitude': latLng.lat, 'longitude': latLng.lng})
    }

    const generatePopUp = resort => {
        return <Popup>
            <PopUpHeader>{resort.name}</PopUpHeader>
            <PopUpText><Bold>{`Days Remaining:`}</Bold> {daysRemaining(resort) === -1 ? 'Unlimited' : daysRemaining(resort)}</PopUpText>
            <PopUpText><Bold>{`Pass:`}</Bold> {resort.pass}</PopUpText>
            <PopUpText><Bold>{`Days Skied:`}</Bold> {daysSkied(resort)}</PopUpText>
            <PopUpText><Bold>{`Distance:`}</Bold> <Distance resort={resort} location={location}/></PopUpText>
        </Popup>
    }

    const markerHtmlStyles = (color) => {return `
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
    `}

    const getIcon = resort => {
        let daysRemain = daysRemaining(resort)
        let color = green
        if (daysRemain === -1 || daysRemain >= 5) {
            //do nothing
        } else if (daysRemain > 2) {
            color = orange
        } else if (daysRemain === 2) {
            color = red
        } else if (daysRemain === 1) {
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
        <Map center={position} zoom={zoom} style={{height:'600px'}}>
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
            {generatePopUp(resort)}
            </Marker> : null)}
            {(location !== null) ? <Marker draggable={true} onDragend={updateLocation} position={[location.latitude,location.longitude]} /> : null }
        </Map>
    </MapContainer>)
}

export default ResortMap
