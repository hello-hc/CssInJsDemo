import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// 自定义组件
const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

function Detail() {
  const [data, setData] = useState("detail");

  return (
    <div>
      detail page: {data}
      <hr />
      <button onClick={setData("hello world")}>点我更改data数据</button>
      <div>
        {/* 在某些情况下，您可能需要更改样式化组件呈现的标记或组件。
            例如，在构建导航栏时（这是锚链接和按钮的混合，但应将它们的样式设置为相同），这是很常见的。
        */}
        {/* as 属性即为“多态组件”。在页面渲染后，html结构上是名为as的值（如“a”）的标签，并且此标签上带有样式组件（如“Button”）上的样式 */}
        <Button>Normal Button</Button>
        <Button as="a" href="/">
          Link with Button styles
        </Button>
        <TomatoButton as="a" href="/">
          Link with Tomato Button styles
        </TomatoButton>

        {/* 与自定义组件配合 */}
        <Button as={ReversedButton} id="custom">
          Custom Button with Normal Button styles
        </Button>
      </div>
    </div>
  );
}

export default Detail;
