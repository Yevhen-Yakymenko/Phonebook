import { useState, useEffect, lazy, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useDispatch } from 'react-redux';

import { useGetUserQuery } from 'redux/user/userApi';
import { useAuth } from 'hooks/useAuth';
import { setUser } from 'redux/user/userSlice';

import Layout from 'components/Layout';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));

export default function App() {
  const dispatch = useDispatch();
  const { token } = useAuth();
  const { data } = useGetUserQuery(token ?? skipToken);

  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch(setUser(data));
  }, [data, dispatch]);

  // ------------------------------------------------
  // geting the header height value

  const [height, setHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const handleResize = () => {
      setHeight(header.offsetHeight);
    };

    if (document.readyState === 'complete') {
      handleResize();
    } else {
      window.addEventListener('load', handleResize);
    }

    return () => {
      window.removeEventListener('load', handleResize);
    };
  }, []);

  // -------------------------------------------------

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout ref={headerRef} />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<HomePage />}
              />
            }
          />

          <Route
            path="signup"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInPage />}
              />
            }
          />
        </Route>
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
      <GlobalStyle headerHeight={height} />
    </>
  );
}
