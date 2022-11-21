import { useAuth } from 'hooks/useAuth';

import Logo from 'components/Logo';
import MainNavList from 'components/MainNavList';
import AuthNavList from 'components/AuthNavList';
import UserMenu from 'components/UserMenu';

import { MainHeader, NavContainer } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainHeader>
      <Logo />
      <NavContainer>
        <MainNavList />
        {isLoggedIn ? <UserMenu /> : <AuthNavList />}
      </NavContainer>
    </MainHeader>
  );
};

export default AppBar;
