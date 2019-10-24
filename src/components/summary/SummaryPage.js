import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import TenDayWx from '../TenDayWx/TenDayWx'
import ResortMap from '../ResortMap/ResortMap'
import ResortSummary from '../ResortSummary/ResortSummary'

class SummaryPage extends React.Component {

    render() {
        return (  <Tabs>
            <TabList>
                <Tab>Resort Map</Tab>
                <Tab>10 Day Wx by Region</Tab>
                <Tab>Snowfall/3 Day Wx by Resort</Tab>
            </TabList>


            <TabPanel>
                <ResortMap />
            </TabPanel>
            <TabPanel>
                <TenDayWx />
            </TabPanel>
            <TabPanel>
               <ResortSummary />
            </TabPanel>
        </Tabs>)
    }
}

export default SummaryPage
