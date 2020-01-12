import { useState, useEffect }  from "react";

function Distance({resort,location}) {
    const [text, setText] = useState("Calculating...")
    const [stateLocation, setLocation] = useState(null)


    useEffect(() => {
        if (location !== stateLocation) {
            updateDistance();
        }
    });

    const secondsToTime = secs  => {
        var sec_num = parseInt(secs, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

    const updateDistance = () => {
        let data = {locations: []};
        setLocation(location) 
        if (location) {
            try {
                data.locations.push([resort.location[1], resort.location[0]])
                data.locations.push([location.longitude, location.latitude])
            } catch (ex) {
                console.log(ex);
            }
            if (data.locations.length > 0) {
                fetch('https://api.openrouteservice.org/v2/matrix/driving-car', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': '5b3ce3597851110001cf6248bcddf07a9ac049d9ba24520e867a8819'
                    },
                    body: JSON.stringify(data)
                  }).then(function(response) {
                    return response.json();
                  }).then(function(json) {
                      console.log(json)
                      if (json.durations && json.durations[0][1]) {
                        setText(secondsToTime(json.durations[0][1]))
                      } else {
                        setText("Unknown")
                      }
                  });
            }
        } else {
            setText("Unknown")
        }
    }

    return text;
}

export default Distance