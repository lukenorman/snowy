import React from "react";

export class Distance extends React.Component {
    constructor() {
        super();
        this.state = { text: "Calculating..." };
    }

    secondsToTime = secs  => {
        var sec_num = parseInt(secs, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
}
    componentDidMount() {
        let me = this;
        let data = {locations: []};
        try {
            data.locations.push([this.props.resort.location[1], this.props.resort.location[0]])
            data.locations.push([this.props.location.coords.longitude, this.props.location.coords.latitude])
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
                  if (json.durations[0][1]) {
                    me.setState({text: me.secondsToTime(json.durations[0][1])})
                  } else {
                    me.setState({text: "???"})
                  }
              });
        }

    }

    render() {
        return <h2>{this.state.text}</h2>;
    }
}