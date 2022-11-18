import { useAuth } from 'hooks/useAuth';

import MainNavList from 'components/MainNavList';
import AuthNavList from 'components/AuthNavList';
import UserMenu from 'components/UserMenu';

import { MainHeader, LogoWrapper, NavWrapper } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainHeader>
      <LogoWrapper>
        <h1>Phonebook</h1>
      </LogoWrapper>
      <NavWrapper>
        <MainNavList />
        {isLoggedIn ? <UserMenu /> : <AuthNavList />}
      </NavWrapper>
    </MainHeader>
  );
};

export default AppBar;
