import { NavLink } from 'react-router-dom';

const NavList = () => {
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'contacts'}>Contacts</NavLink>
    </nav>
  );
};

export default NavList;
