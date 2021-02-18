  
import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';

const DashboardContainer = styled.div`
  background: #FFF;
  background: linear-gradient(90deg, #FFF 26%, #EFF5FF 26%);
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const DashboardWrapper = styled.div`
  background-color: red;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
  min-width: 10px;
  display: flex;
`;

const LeftDashboard = styled.section`
  background-color: #FFF;
  flex-basis: 180px;
  display: flex;
  flex-direction: column;
`;

const RightDashboard = styled.section`
  background-color: #EFF5FF;
  flex-grow: 1;
  padding: 80px 30px 20px;
`;

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  flex-grow: 1;
`;

const Menu = styled.a`
  display: block;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 15px;
  text-decoration: none;
  color: #878787;
  margin-bottom: 20px;
  &:hover { background-color: #EFF5FF; }
  &.active {
    font-weight: bold;
    color: #303030;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 22px;
      background: #2A65EA;
      border-radius: 5px 0px 0px 5px;
    }
  }
  &.logout {
    justify-self: flex-end;
    margin-top: auto;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <LeftDashboard>
          <Logo />

          <MenuWrapper>
            <Menu href="#" className="active">Profile</Menu>
            <Menu href="#">Iklanku</Menu>
            <Menu href="#">Pasang Iklan</Menu>
            <Menu href="#" className="logout">Logout</Menu>
          </MenuWrapper>

        </LeftDashboard>
        <RightDashboard>
          <h2>Profile</h2>
        </RightDashboard>
      </DashboardWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;