import React from "react";
import styled from "styled-components";

const Link = ({ className, children }) => (
  <a href="/">
    <div className={className}>{children}</div>
  </a>
);

const StyledLink = styled(Link)`
  position: relative;
  color: ${(props) => (props.isColor ? "skyblue" : "green")};
  font-weight: bold;

  &::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: orange;
  }

  &,
  .def {
    border-bottom: 4px solid #ccc;
  }

  .qq {
    position: relative;
  }
  .qq::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: green;
  }
`;

// const StyledLink = styled(Link, {
//     color: props => props.isColor ? 'skyblue' : 'green',
//     fontWeight: 'bold',

//     after: {
//         position: 'absolute',
//         content: '',
//         width: '10px',
//         height: '10px',
//         background: 'orange',
//     }
// })

const Input = styled("input")`
  color: ${(props) => (props.isColor ? "skyblue" : "green")};
  font-weight: bold;
`;
// styled.div 等同于 styled('div')

function Component3() {
  return (
    <div>
      <Link className="abc" isColor={true}>
        Unstyled, boring Link
      </Link>
      <br />
      <StyledLink className="def" isColor={true}>
        <label className="qq">Styled, exciting Link</label>
      </StyledLink>
      <br />
      <Input defaultValue="1234" isColor={true} />
    </div>
  );
}

export default Component3;
