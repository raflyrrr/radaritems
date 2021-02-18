import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${(props) => (props.size === "large" ? "48px" : "24px")};
  color: #1f1f1f;
`;

const Title = ({ text, size }) => {
  return <Heading size={size}>{text}</Heading>;
};

export default Title;
