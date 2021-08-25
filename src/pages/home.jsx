import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styleComponents from "./styles/index";

const { Title, Wrapper } = styleComponents;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgb(232, 175, 197);
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: #88d5b9;
  border-color: #88d5b9;
`;

const BlueButton = styled.div({
  color: "white",
  backgroundColor: "blue",
});

const LinkWrapper = styled.div({
  color: "white",
  backgroundColor: "skyblue",
});

// 问题：
// 1.在模版字符串中，无法进行代码提示
// 2. 无法对样式进行抽离

function Home() {
  const [a, setA] = useState(1);

  return (
    <Wrapper>
      a: {a}
      <Title>123</Title>
      {/* <Button primary>click</Button> */}
      <Button>click</Button>
      <TomatoButton>click</TomatoButton>
      <BlueButton onClick={() => setA(a + 1)}>click</BlueButton>
      <hr />
      <LinkWrapper>
        <Link to="/detail">detail</Link>
        <hr />
        <Link to="/component3">component3</Link>
        <hr />
        <Link to="/component4">component4</Link>
        <hr />
        <Link to="/attr">attr</Link>
        <hr />
        <Link to="/theme">theme</Link>
      </LinkWrapper>
    </Wrapper>
  );
}

export default Home;
