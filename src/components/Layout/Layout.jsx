import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import LogoLink from 'components/LogoLink/';
import AuthNavList from 'components/AuthNavList';

import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar>
        <LogoLink />

        <AuthNavList />
      </AppBar>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <footer>Foter</footer>
    </>
  );
};

export default Layout;
