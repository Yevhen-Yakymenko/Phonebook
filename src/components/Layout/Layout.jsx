import { useState, useRef, forwardRef, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import LogoLink from 'components/LogoLink/';
import AuthNavList from 'components/AuthNavList';
import BurgerMenu from 'components/BurgerMenu';

const Layout = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const AuthList = useRef();

  const toggleMenu = () => {
    AuthList.current.classList.toggle('menu--open');
    setIsOpen(!isOpen);
    document.body.classList.toggle('modal-open');
  };

  const handleCloseMenu = () => {
    if (isOpen) {
      AuthList.current.classList.remove('menu--open');
      setIsOpen(!isOpen);
      document.body.classList.remove('modal-open');
    }
  };

  return (
    <>
      <AppBar ref={ref}>
        <LogoLink to={'/'} title="Home" onClick={() => handleCloseMenu()} />

        <BurgerMenu
          aria-controls="AuthNavList"
          switcher={isOpen}
          showMenu={toggleMenu}
        />

        <AuthNavList
          id="AuthNavList"
          ref={AuthList}
          onClick={() => handleCloseMenu()}
        />
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
