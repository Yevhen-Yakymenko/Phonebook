import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import LogoLink from 'components/LogoLink/';
import AuthNavList from 'components/AuthNavList';

const Layout = () => {
  return (
    <>
      <AppBar>
        <LogoLink />

        <AuthNavList />
      </AppBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Foter</footer>
    </>
  );
};

export default Layout;
