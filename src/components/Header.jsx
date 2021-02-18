import React from "react";
import styled from "styled-components";
import Logo from './Logo'

import { ReactComponent as CameraIcon } from "../icons/mdi_photo_camera.svg";

import Button from "./Button";

const Header = styled.header`
  background-color: #fff;
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
display:flex;
align-items: stretch;
    > * {
        margin: 0 10px;
    
        &:first-child {
            margin-left:0;
        }
        &:last-child {
            margin-right:0;
        }
    }`;



const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo">
        <Logo/>
      </div>
      <Menu>
        <Button text="Login" type="secondary" href="/login"/>
        <Button text="Jual" icon={<CameraIcon />} type="primary" href="/daftar" />
      </Menu>
    </Header>
  );
};
export default HeaderComponent;
