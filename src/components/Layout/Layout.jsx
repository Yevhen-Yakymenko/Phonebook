import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import LogoLink from 'components/LogoLink/';
import NavBlock from 'components/NavBlock';
import AuthNavList from 'components/AuthNavList';
import Footer from 'components/Footer';

const Layout = ({ getHeight }) => {
  return (
    <>
      <AppBar getHeight={getHeight}>
        <LogoLink to={'/'} title="Home" />

        <NavBlock>
          <AuthNavList id="AuthNavList" />
        </NavBlock>
      </AppBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>Foter</Footer>
    </>
  );
};

export default Layout;
