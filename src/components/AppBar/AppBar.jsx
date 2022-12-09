// import { useAuth } from 'hooks/useAuth';

// import Logo from 'components/Logo';
// import MainNavList from 'components/MainNavList';
// import AuthNavList from 'components/AuthNavList';
// import UserMenu from 'components/UserMenu';

import { MainHeader, Container } from './AppBar.styled';

const AppBar = ({ children }) => {
  // const { isLoggedIn } = useAuth();

  return (
    <MainHeader>
      <Container>
        {children}
        {/* <SiteNav>
          <StyledLogoLink to={'/'} title="Home">
            <Logo />
          </StyledLogoLink>

          <MainNavList />

          {!isLoggedIn && <AuthNavList />}
        </SiteNav> */}
        {/* {isLoggedIn && <UserMenu />} */}
      </Container>
    </MainHeader>
  );
};

export default AppBar;
