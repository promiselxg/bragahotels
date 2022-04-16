import React from 'react';
import { Header } from '.';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
