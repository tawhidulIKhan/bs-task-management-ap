import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Layout.scss';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">{children}</div>
      <Footer />
    </div>
  );
}
