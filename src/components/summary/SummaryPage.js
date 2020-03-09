import React from 'react'
import "react-tabs/style/react-tabs.css";
import Stats from '../Stats/Stats'
import ResortMap from '../ResortMap/ResortMap'

function SummaryPage() {

    return (<div>
                <h2>Kristen and Luke's 2019/2020 Winter Road Trip</h2>
                <Stats />
                <ResortMap />
            </div>)
}

export default SummaryPage