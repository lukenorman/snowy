import React, { useEffect, useState } from "react";
import { Map, Marker } from "react-leaflet";
import styled from "styled-components";
import L from "leaflet";
import "leaflet-openweathermap";

import { Resorts } from "../constants/resorts";
import LayerControl from "./map/LayerControl";
import MarkerPopup from "./map/MarkerPopup";
import { daysSkied, daysRemaining } from "../util/days";

const MapContainer = styled.div`
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
`;

//Component that shows a resort map with layers for current weather
//There are colored markers for each resorts to indicate the numbers of days remaining
//Each marker has a popup with stats and driving distance from a given location
function ResortMap() {
  const zoom = 5;
  const mapCenter = [43, -100.09];
  const green = "#4AC948";
  const orange = "#FFA500";
  const red = "#FA8072";
  const realRed = "#FC1501";

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const defaultLocation = { latitude: 50.9981, longitude: -118.1957 };
    console.log("Setting up location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(`Updating location`);
          setLocation(position.coords);
        },
        (error) => {
          console.log(error);
          setLocation(defaultLocation);
        },
        { timeout: 10000 }
      );
    } else {
      console.log("Location sensing not enabled");
      setLocation(defaultLocation);
    }
    //Only run once, when component is mounted
  }, []);

  const updateLocation = (e) => {
    const latLng = e.target.getLatLng();
    setLocation({ latitude: latLng.lat, longitude: latLng.lng });
  };

  const updateLocationToResort = (resort) => {
    setLocation({
      latitude: resort.location[0],
      longitude: resort.location[1],
    });
  };

  const markerHtmlStyles = (color) => {
    return `
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
    `;
  };

  const getIcon = (resort) => {
    let daysRemain = daysRemaining(resort);
    let color = green;
    if (daysRemain === -1 || daysRemain >= 5) {
      //do nothing
    } else if (daysRemain > 2) {
      color = orange;
    } else if (daysRemain > 0) {
      color = red;
    } else if (daysRemain === 0) {
      color = realRed;
    }

    let virginResort = daysSkied(resort) === 0;

    return L.divIcon({
      className: "my-custom-pin",
      iconAnchor: [0, 10],
      labelAnchor: [0, 10],
      popupAnchor: [0, 10],
      html: virginResort
        ? `<span style="${markerHtmlStyles(color)}">X</span>`
        : `<span style="${markerHtmlStyles(color)}" />`,
    });
  };

  return (
    <MapContainer>
      <Map center={mapCenter} zoom={zoom} style={{ height: "400px" }}>
        <LayerControl />
        {Resorts.map((resort) =>
          resort.location ? (
            <Marker
              icon={getIcon(resort)}
              position={resort.location}
              key={resort.name}
            >
              <MarkerPopup
                resort={resort}
                location={location}
                updateLocationToResort={updateLocationToResort}
              />
            </Marker>
          ) : null
        )}
        {location && (
          <Marker
            draggable={true}
            onDragend={updateLocation}
            position={[location.latitude, location.longitude]}
          />
        )}
      </Map>
    </MapContainer>
  );
}

export default ResortMap;
