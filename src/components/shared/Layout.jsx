import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Space Hub</title>
        <meta
          name="description"
          content="A web application for a companies that provide commercial and scientific space travel services"
        />
      </Helmet>
      <Header />
      <div className="content-container">{children}</div>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
