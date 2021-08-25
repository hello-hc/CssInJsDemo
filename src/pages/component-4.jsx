import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Thing = styled.div`
  background-color: green;

  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
    div${Thing} {
        color: red;
        background: orange;
    }
    div {
        color: red;
    }
`;
// 上面的全局背景颜色是可以显示的，文字颜色则被局部样式所更改。
// 假设我们设置了全局样式，然后我们并不想使用全局的样式，那么我们可以通过上述方式实现修改局部样式

// “＆”号可用于增加组件上规则的特殊性。如果您正在处理样式元素混合和原始CSS环境（其中可能存在冲突的样式）的情况，这将非常有用：

const Component4 = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Thing>I'm blue, da ba dee da ba daa</Thing>
      <Thing>I'm red, da ba dee ba ba daa</Thing>
    </React.Fragment>
  );
};

export default Component4;
