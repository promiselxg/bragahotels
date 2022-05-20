import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Sidebar } from './index';

const LayoutWrapper = styled.section`
  width: 100%;
  background: #f2f7ff;
  min-height: 100vh;

  .container {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  .sidebar {
    width: 300px;
    height: 100vh;
    position: fixed;
    overflow-y: scroll;
    top: 0px;
    z-index: 10;
    overflow-y: auto;
    background-color: rgb(255, 255, 255);
    bottom: 0px;
    transition: left 0.5s ease-out 0s;
  }
  .main {
    background: purple;
    flex: 1;
    margin-left: 300px;
    padding: 2rem;
    width: 100%;
  }
`;
const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <div className="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            <Outlet />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
