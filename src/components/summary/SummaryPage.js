import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Stats from '../Stats/Stats'
import ResortMap from '../ResortMap/ResortMap'

class SummaryPage extends React.Component {

    render() {
        return (  <Tabs>
            <TabList>
                <Tab>Resort Map</Tab>
                <Tab>Stats</Tab>
            </TabList>


            <TabPanel>
                <ResortMap />
            </TabPanel>
            <TabPanel>
                <Stats />
            </TabPanel>
        </Tabs>)
    }
}

export default SummaryPage
