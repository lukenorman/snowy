import React, { Fragment } from "react";
import { Popup } from "react-leaflet";
import styled from "styled-components";
import Distance from "../map/Distance";

import {daysSkied, daysRemaining} from '../../util/days'

const PopUpText = styled.div`
  padding: 2px;
  font-size: 12px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const PopUpHeader = styled.div`
  padding: 2px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

//Component for a marker popup, showing stats about the resort, distance from the location
//and allows user to update location to resort's location
function MarkerPopup({ resort, location, updateLocationToResort }) {
  let skiedDays = daysSkied(resort);

  return (
    <Popup>
      <PopUpHeader>{resort.name}</PopUpHeader>
      <PopUpText>
        <Bold>{`Days Remaining:`}</Bold>{" "}
        {daysRemaining(resort) === -1 ? "Unlimited" : daysRemaining(resort)}
      </PopUpText>
      <PopUpText>
        <Bold>{`Pass:`}</Bold> {resort.pass}
      </PopUpText>
      <PopUpText>
        <Bold>{`Days Skied:`}</Bold> {skiedDays}
      </PopUpText>
      {location && (
        <Fragment>
          <PopUpText>
            <Bold>{`Distance:`}</Bold>{" "}
            <Distance resort={resort} location={location} />
          </PopUpText>
          <br />
          <PopUpText onClick={() => updateLocationToResort(resort)}>
            <Bold>Set location to this resort</Bold>
          </PopUpText>
        </Fragment>
      )}
    </Popup>
  );
}

export default MarkerPopup;
