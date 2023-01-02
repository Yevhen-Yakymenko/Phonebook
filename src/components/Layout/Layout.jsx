import { forwardRef, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import LogoLink from 'components/LogoLink/';
import NavBloc from 'components/NavBloc';
import AuthNavList from 'components/AuthNavList';

const Layout = forwardRef((_, ref) => {
  return (
    <>
      <AppBar ref={ref}>
        <LogoLink to={'/'} title="Home" />

        <NavBloc>
          <AuthNavList id="AuthNavList" />
        </NavBloc>
      </AppBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Foter</footer>
    </>
  );
});

export default Layout;
