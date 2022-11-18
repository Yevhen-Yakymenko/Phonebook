import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <nav>
      <NavLink to={'signup'}>Sign Up</NavLink>
      <NavLink to={'login'}>Log In</NavLink>
    </nav>
  );
};

export default UserMenu;
