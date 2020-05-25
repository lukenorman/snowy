import React from "react";
import styled from "styled-components";

import Stats from "./components/Stats";
import ResortMap from "./components/ResortMap";

const HeaderContainer = styled.div`
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction:column;
`;

function App() {
  return (
    <>
      <HeaderContainer>
        Kristen and Luke's 2019/2020 Winter Road Trip
      </HeaderContainer>
      <FlexContainer>
        <Stats />
        <ResortMap />
      </FlexContainer>
    </>
  );
}

export default App;
