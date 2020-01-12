import React from "react";
import { Route } from "react-router-dom";

// pages
import SummaryPage from "./summary/SummaryPage";

function MainApp() {
    return <div className="App">
        <Route exact path="/" component={SummaryPage} />
    </div>
}

export default MainApp
