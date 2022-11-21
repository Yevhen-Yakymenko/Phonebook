import { NavLink } from 'react-router-dom';

import { BtnWrapper } from './AuthNavList.styled';

const AuthNavList = () => {
  return (
    <BtnWrapper>
      <NavLink to={'signup'}>Sign Up</NavLink>
      <NavLink to={'login'}>Log In</NavLink>
    </BtnWrapper>
  );
};

export default AuthNavList;
