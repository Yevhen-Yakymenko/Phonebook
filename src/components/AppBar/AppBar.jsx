import { useAuth } from 'hooks/useAuth';

import Logo from 'components/Logo';
import MainNavList from 'components/MainNavList';
import AuthNavList from 'components/AuthNavList';
import UserMenu from 'components/UserMenu';

import {
  MainHeader,
  Container,
  SiteNav,
  StyledLogoLink,
} from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainHeader>
      <Container>
        <SiteNav>
          <StyledLogoLink to={'/'} title="Home">
            <Logo />
          </StyledLogoLink>

          <MainNavList />

          {!isLoggedIn && <AuthNavList />}
        </SiteNav>
        {isLoggedIn && <UserMenu />}
      </Container>
    </MainHeader>
  );
};

export default AppBar;
