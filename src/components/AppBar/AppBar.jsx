import { useAuth } from 'hooks/useAuth';

import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import MainNavList from 'components/MainNavList';
import AuthNavList from 'components/AuthNavList';
import UserMenu from 'components/UserMenu';

import { MainHeader, NavContainer } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainHeader>
      <Link to={'/'} title="Home">
        <Logo />
      </Link>

      <NavContainer>
        <MainNavList />
        {isLoggedIn ? <UserMenu /> : <AuthNavList />}
      </NavContainer>
    </MainHeader>
  );
};

export default AppBar;
