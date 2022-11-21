import { NavWrapper, StyledLink } from './MainNavList.styled';

const NavList = () => {
  return (
    <NavWrapper>
      <StyledLink to={'/'} title="Home">
        Home
      </StyledLink>
      <StyledLink to={'contacts'} title="Contacts">
        Contacts
      </StyledLink>
    </NavWrapper>
  );
};

export default NavList;
