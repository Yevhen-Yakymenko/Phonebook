import { NavList, NavItem, StyledLink } from './MainNavList.styled';

const MainNavList = () => {
  return (
    <NavList>
      <NavItem>
        <StyledLink to={'/'} title="Home">
          Home
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={'contacts'} title="Contacts">
          Contacts
        </StyledLink>
      </NavItem>
    </NavList>
  );
};

export default MainNavList;
