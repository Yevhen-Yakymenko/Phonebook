import { NavList, StyledLink } from './MainNavList.styled';

const MainNavList = () => {
  return (
    <NavList>
      <li>
        <StyledLink to={'/'} title="Home">
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'contacts'} title="Contacts">
          Contacts
        </StyledLink>
      </li>
    </NavList>
  );
};

export default MainNavList;
