import { useState, useEffect } from "react";

//Component to calculate distance between a resort and a location
//and update that distance once loaded, as the location changes
function Distance({ resort, location }) {
  const [text, setText] = useState("Calculating...");

  useEffect(() => {
    const doLocationUpdate = async () => {
      let data = { locations: [] };

      try {
        setText("Calculating...")
        data.locations.push([resort.location[1], resort.location[0]]);
        data.locations.push([location.longitude, location.latitude]);
        const response = await fetch(
          "https://api.openrouteservice.org/v2/matrix/driving-car",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "5b3ce3597851110001cf6248bcddf07a9ac049d9ba24520e867a8819",
            },
            body: JSON.stringify(data),
          }
        );
        const locationJson = await response.json();
        setText(secondsToTime(locationJson.durations[0][1]))
      } catch (ex) {
        console.log("Error updating distance from API")
        setText("Unknown");
      }
    };
    doLocationUpdate();
  }, [location, resort]);

  const secondsToTime = (secs) => {
    if (secs !== null && !isNaN(secs)) {
        console.log(secs)
        var sec_num = parseInt(secs, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - hours * 3600) / 60);
        var seconds = sec_num - hours * 3600 - minutes * 60;
    
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        return hours + ":" + minutes + ":" + seconds;
    } else {
        return "Unknown"
    }
  
  };

  return text;
}

export default Distance;
