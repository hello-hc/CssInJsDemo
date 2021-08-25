import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  // 定义静态属性
  type: "text",

  // 或者定义动态属性
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const PasswordInput = styled(Input).attrs({
  type: "spassword",
})`
  /* similarly, border will override Input's border */
  border: 2px solid aqua;
  border-radius: 50%;
`;

const NumberInput = styled(Input).attrs({
  type: "number",
})`
  border-color: 2px solid #ccc;
`;

// 通过props传递属性，我们还可以设置全局主题样式

// 如果选择将样式组件与现有CSS一起使用，则应注意一些实现细节。
// styled-components会生成带有类的实际样式表，并将这些类通过以下方式附加到样式化组件的DOM节点上： 班级名称支柱。在运行时，它将生成的样式表注入文档标题的末尾。

const Attr = () => {
  return (
    <div>
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
      <br />
      <PasswordInput placeholder="A password text input" size="2em" />
      <br />
      <NumberInput placeholder="A number text input" size="3em" />
    </div>
  );
};

export default Attr;
