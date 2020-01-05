import React from 'react'
import { Resorts, EPIC, IKON } from "../../constants/resorts"
import { Days } from "../../constants/days"

class Stats extends React.Component {


    state = {
        epicDays: 0,
        ikonDays: 0
      }

    componentDidMount() { 
        let epic = 0;
        let ikon = 0;
        for (let day of Days) {
            let resort = Resorts.find(r => r.name === day.resort)
            if (resort) {
                console.log("Found a resort")
                if (resort.pass === IKON) {
                    ikon++;
                } else if (resort.pass === EPIC) {
                    epic++;
                }
            }
        }
        this.setState({epicDays: epic})
        this.setState({ikonDays: ikon})
    }

    render() {
        return (<div>
                    <h2>Stats</h2>
                    <div>Total Days: {Days.length} </div>
                    <div>Epic Days: {this.state.epicDays} </div>
                    <div>Ikon Days: {this.state.ikonDays} </div>
                </div>)
    }
}

export default Stats
