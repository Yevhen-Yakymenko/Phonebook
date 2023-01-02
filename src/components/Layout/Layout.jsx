import { useState, useEffect, useRef, forwardRef, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import LogoLink from 'components/LogoLink/';
import AuthNavList from 'components/AuthNavList';
import BurgerMenu from 'components/BurgerMenu';
import NavBox from 'components/NavBox';

const Layout = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const NavList = useRef();
  const Burger = useRef();

  useEffect(() => {
    const handleCloseMenu = e => {
      if (e.target !== NavList.current && e.target !== Burger.current) {
        NavList.current.classList.remove('menu--open');
        document.body.classList.remove('modal-open');
        setIsOpen(false);
      }
    };

    if (!isOpen) {
      return;
    }

    document.addEventListener('click', handleCloseMenu);

    return () => {
      document.removeEventListener('click', handleCloseMenu);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    NavList.current.classList.toggle('menu--open');
    setIsOpen(!isOpen);
    document.body.classList.toggle('modal-open');
  };

  return (
    <>
      <AppBar ref={ref}>
        <LogoLink to={'/'} title="Home" />

        <BurgerMenu
          aria-controls="AuthNavList"
          switcher={isOpen}
          showMenu={toggleMenu}
          ref={Burger}
        />

        <NavBox ref={NavList}>
          <AuthNavList id="AuthNavList" />
        </NavBox>
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
