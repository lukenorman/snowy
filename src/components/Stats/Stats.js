import React, { useState, useEffect } from 'react'
import { Resorts, EPIC, IKON } from "../../constants/resorts"
import { Days } from "../../constants/days"

function Stats() {

    const [epicDays, setEpicDays] = useState(0)
    const [ikonDays, setIkonDays] = useState(0)
    const [resortsSkied, setResortsSkied] =  useState(0)

    useEffect(() => {
        let epic = 0;
        let ikon = 0;
        let resorts = [];
        for (let day of Days) {
            let resort = Resorts.find(r => r.name === day.resort)
            if (resort) {
                if (!resorts.includes(resort)) {
                    resorts.push(resort)
                }
                console.log("Found a resort")
                if (resort.pass === IKON) {
                    ikon++;
                } else if (resort.pass === EPIC) {
                    epic++;
                }
            }
        }
        setEpicDays(epic)
        setIkonDays(ikon)
        setResortsSkied(resorts.length)
    }, [setEpicDays, setIkonDays]);

    return (<div>
                <h2>Stats</h2>
                <div>Total Days: {Days.length} </div>
                <div>Epic Days: {epicDays} </div>
                <div>Ikon Days: {ikonDays} </div>
                <div>Resort Skied: {resortsSkied}</div>
            </div>)
}

export default Stats;
