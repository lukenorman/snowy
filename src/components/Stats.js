import React from "react";
import styled from "styled-components";
import { Resorts, EPIC, IKON, INDY } from "../constants/resorts";
import { Days } from "../constants/days";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

function Stats() {
  //Checks if the date would be consecutive for a given startDate and current count
  const isConsecutiveToCurrentRun = (date, startDate, count) => {
    let secondDate = new Date(startDate);
    secondDate.setDate(secondDate.getDate() + count);
    let equal =
      date.getFullYear() === secondDate.getFullYear() &&
      date.getMonth() === secondDate.getMonth() &&
      date.getDate() === secondDate.getDate();
    return equal;
  };

  const printDate = (date) => {
    if (date === null) return "";
    else return date.toDateString();
  };

  //These are all set and rendered
  let mostRecentDate = "";
  let epicDays = 0;
  let ikonDays = 0;
  let indyDays = 0;
  let resortsSkied = [];
  let daysInARow = 0;
  let daysInARowStart = new Date(Days[0].date);

  if (Days[Days.length - 1] && Days[Days.length - 1].date) {
    let dateObject = new Date(Days[Days.length - 1].date);
    mostRecentDate = dateObject.toDateString();
  }

  //counters for calculating highest consecutive days
  let consecutiveDays = 0;
  let startDate = new Date(Days[0].date);

  //Iterate over days calculating some statistics
  for (let day of Days) {
    let date = new Date(day.date);
    if (isConsecutiveToCurrentRun(date, startDate, consecutiveDays)) {
      consecutiveDays++;
    } else {
      if (consecutiveDays > daysInARow) {
        daysInARow = consecutiveDays;
        daysInARowStart = startDate;
      }
      consecutiveDays = 1;
      startDate = new Date(day.date);
    }
    let resort = Resorts.find((r) => r.name === day.resort);
    if (resort) {
      if (!resortsSkied.includes(resort)) {
        resortsSkied.push(resort);
      }
      if (resort.pass === IKON) {
        ikonDays++;
      } else if (resort.pass === EPIC) {
        epicDays++;
      } else if (resort.pass === INDY) {
        indyDays++;
      }
    }
  }

  //more rendered values
  let regionsSkied = [];
  let mostDaysSkied = [];
  let oneDayWonders = [];
  
  //Iterate over resorts skied, calculating more stats
  for (let resort of resortsSkied) {
    let days = Days.filter((d) => d.resort === resort.name);
    if (days.length > mostDaysSkied.length) {
      mostDaysSkied = days;
    }
    if (days.length === 1) {
      oneDayWonders.push(resort.name);
    }
    if (!regionsSkied.includes(resort.region)) {
      regionsSkied.push(resort.region);
    }
  }

  return (
    <StatsContainer>
      <div>
        <div>
          <b>Total Days:</b> {Days.length} as of {mostRecentDate}
        </div>
        <div>
          <b>Epic Days:</b> {epicDays}{" "}
        </div>
        <div>
          <b>Ikon Days:</b> {ikonDays}{" "}
        </div>
        <div>
          <b>Indy Days:</b> {indyDays}{" "}
        </div>
        <div>
          <b>Resort Skied:</b> {resortsSkied.length}
        </div>
        <div>
          <b>States/Provinces Skied:</b> {regionsSkied.length}
        </div>
      </div>
      <div>
        <div>
          <b>Most Days At One Resort:</b> {mostDaysSkied.length} @{" "}
          {(mostDaysSkied[0] && mostDaysSkied[0].resort) || ""}{" "}
        </div>
        <div>
          <b>Most Days In A Row:</b> {daysInARow} starting @{" "}
          {printDate(daysInARowStart)}
        </div>
        <div>
          <b>1 Day Wonders:</b> {oneDayWonders.join(", ")}{" "}
        </div>
      </div>
    </StatsContainer>
  );
}

export default Stats;
