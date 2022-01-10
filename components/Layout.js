import React from 'react';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />

      {children}
    </>
  )
}

export default Layout;
