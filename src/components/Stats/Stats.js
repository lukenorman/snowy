import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import { Resorts, EPIC, IKON, INDY } from "../../constants/resorts"
import { Days } from "../../constants/days"

const StatsContainer = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing:border-box;
`;

function Stats() {

    const [epicDays, setEpicDays] = useState(0)
    const [ikonDays, setIkonDays] = useState(0)
    const [indyDays, setIndyDays] = useState(0)
    const [mostDays, setMostDays] = useState([])
    const [resortsSkied, setResortsSkied] =  useState(0)
    const [oneDay, setOneDay] = useState([])
    const [daysInARow, setDaysInARow] = useState(0)
    const [daysInARowStart, setDaysInARowStart] = useState(null)
    const [mostRecentDate, setMostRecentDate] = useState("")
    const [regionCount, setRegionCount] = useState([])

    const datesEqual = (date,startDate,days) => {
        let secondDate = new Date(startDate)
        secondDate.setDate(secondDate.getDate() + days);
        let equal = date.getFullYear() === secondDate.getFullYear() 
        && date.getMonth() === secondDate.getMonth() 
        && date.getDate() === secondDate.getDate();
        return equal
    }

    const printDate = date => {
        if (date === null) return ""
        else return date.toDateString()
    }

    useEffect(() => {
        let epic = 0;
        let ikon = 0;
        let indy = 0
        let mostDaysSkied = [];
        let resorts = [];
        let oneDayWonders = [];
        let maxConsecutive = 0
        let maxConsecutiveStart = new Date(Days[0].date)
        let consecutiveDays = 0;
        let startDate = new Date(Days[0].date);
        let regions = [];
        if (Days[Days.length-1] && Days[Days.length-1].date) {
            let dateObject = new Date(Days[Days.length-1].date)
            setMostRecentDate(dateObject.toDateString())
        }
        for (let day of Days) {
            let date = new Date(day.date)
            if (datesEqual(date,startDate,consecutiveDays)) {
                consecutiveDays++
            } else {
                if (consecutiveDays > maxConsecutive) {
                    maxConsecutive = consecutiveDays
                    maxConsecutiveStart = startDate
                }
                consecutiveDays = 1
                startDate = new Date(day.date)
            }
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
                } else if (resort.pass === INDY) {
                    indy++;
                }
            }
        }
        for (let resort of resorts) {
            let days = Days.filter(d => d.resort === resort.name)
            if (days.length > mostDaysSkied.length) {
                mostDaysSkied = days;
            }
            if (days.length === 1) {
                oneDayWonders.push(resort.name)
            }
            if (!regions.includes(resort.region)) {
                regions.push(resort.region)
            }
        }
        setEpicDays(epic)
        setIkonDays(ikon)
        setIndyDays(indy)
        setResortsSkied(resorts.length)
        setMostDays(mostDaysSkied)
        setOneDay(oneDayWonders)
        setDaysInARow(maxConsecutive)
        setDaysInARowStart(maxConsecutiveStart)
        setRegionCount(regions)
    }, [setEpicDays, setIkonDays, setIndyDays, setResortsSkied, setMostDays, setOneDay, setDaysInARow, setDaysInARowStart, setMostRecentDate, setRegionCount]);

    return (<StatsContainer>
                <div><b>Total Days:</b> {Days.length} as of {mostRecentDate}</div>
                <div><b>Epic Days:</b> {epicDays} </div>
                <div><b>Ikon Days:</b> {ikonDays} </div>
                <div><b>Indy Days:</b> {indyDays} </div>
                <div><b>Resort Skied:</b> {resortsSkied}</div>
                <div><b>Most Days At One Resort:</b> {mostDays.length} @ {(mostDays[0] && mostDays[0].resort) || ""} </div>
                <div><b>Most Days In A Row:</b> {daysInARow} starting @ {printDate(daysInARowStart)}</div>
                <div><b>1 Day Wonders:</b> {oneDay.join(", ")} </div>
                <div><b>States/Provinces Skied:</b> {regionCount.length}</div>
            </StatsContainer>)
}

export default Stats;
