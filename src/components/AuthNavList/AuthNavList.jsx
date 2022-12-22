import { forwardRef } from 'react';

import { BtnWrapper, LinkLogIn, LinkSignUp } from './AuthNavList.styled';

const AuthNavList = forwardRef((props, ref) => {
  return (
    <BtnWrapper ref={ref} {...props}>
      <LinkLogIn to={'login'} title="Log In">
        Log In
      </LinkLogIn>
      <LinkSignUp to={'signup'} title="Sign Up">
        Sign Up
      </LinkSignUp>
    </BtnWrapper>
  );
});

export default AuthNavList;
