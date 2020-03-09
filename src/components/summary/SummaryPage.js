import React from 'react'
import styled from "styled-components";
import Stats from '../Stats/Stats'
import ResortMap from '../ResortMap/ResortMap'

const HeaderContainer = styled.div`
  padding: 10px 20px;
  width: 100%;
  box-sizing:border-box;
  font-size:1.5em;
  font-weight:bold;
`;

function SummaryPage() {

    return (<div>
                <HeaderContainer>Kristen and Luke's 2019/2020 Winter Road Trip</HeaderContainer>
                <Stats />
                <ResortMap />
            </div>)
}

export default SummaryPage