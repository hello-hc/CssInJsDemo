import React from "react";
import styled from "styled-components";

import "./styles/theme.css";

const TomatoDiv = styled.div`
  background-color: orange;
`;

const Theme = () => {
  return (
    <div>
      theme styles
      <TomatoDiv className="test-theme">tomato div</TomatoDiv>
      <TomatoDiv>tomato div</TomatoDiv>
    </div>
  );
};

export default Theme;
