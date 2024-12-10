import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <Header />
    <main><Outlet /></main>
    <Footer />
  </div>
);

export default MainLayout;
