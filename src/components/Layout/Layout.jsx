import { useState, useEffect, useRef, forwardRef, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import LogoLink from 'components/LogoLink/';
import AuthNavList from 'components/AuthNavList';
import BurgerMenu from 'components/BurgerMenu';

const Layout = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const AuthList = useRef();

  useEffect(() => {
    console.log('before: ', isOpen);

    const handleCloseMenu = e => {
      console.log('1');
      // console.log(e);
      console.dir(e.target);
      console.dir(e.currentTarget);
      if (e.target !== AuthList) {
        AuthList.current.classList.remove('menu--open');
        document.body.classList.remove('modal-open');
        setIsOpen(false);
        console.log('inside: ', isOpen);
      }
    };

    console.log('after: ', isOpen);

    if (!isOpen) {
      console.log('first');
      return;
    }

    document.addEventListener('click', handleCloseMenu);
    console.log('after 2: ', isOpen);

    console.log('after 3: ', isOpen);

    return () => {
      document.removeEventListener('click', handleCloseMenu);
      console.log('after 4: ', isOpen);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if (!isOpen) {
      AuthList.current.classList.add('menu--open');
      document.body.classList.add('modal-open');
      setIsOpen(true);
    }
    if (isOpen) {
      AuthList.current.classList.remove('menu--open');
      document.body.classList.remove('modal-open');
      setIsOpen(false);
    }
  };

  // const toggleMenu = () => {
  //   AuthList.current.classList.toggle('menu--open');
  //   setIsOpen(!isOpen);
  //   document.body.classList.toggle('modal-open');
  // };

  return (
    <>
      <AppBar ref={ref}>
        <LogoLink to={'/'} title="Home" />

        <BurgerMenu
          aria-controls="AuthNavList"
          switcher={isOpen}
          showMenu={toggleMenu}
        />

        <AuthNavList id="AuthNavList" ref={AuthList} />
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
