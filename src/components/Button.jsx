import React from "react";
import styled from "styled-components";

const Button = styled.a`
  border: none;
  background-color: ${(props) => props.type.bgColor};
  color: ${(props) => props.type.textColor};
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${(props) => props.type.fontWeight};
  text-decoration: none;

  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${(props) => props.type.bgColorHover};
  }
`;
const buttonType = {
  primary: {
    textColor: "#fff",
    bgColor: "#2A65EA",
    fontWeight: "bold",
    bgColorHover: "#5086FF",
  },
  secondary: {
    textColor: "#303030",
    bgColor: "#FFF",
    fontWeight: "normal",
    bgColorHover: "#EFF5FF",
  },
};

const ButtonComponent = ({ text, icon, type,href }) => {
  return (
    <Button type={buttonType[type]}href={href}>
      {icon}
      {text}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  type: "primary",
};

export default ButtonComponent;
