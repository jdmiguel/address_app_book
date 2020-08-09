import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer withSettings />
  </div>
);

export default Layout;
