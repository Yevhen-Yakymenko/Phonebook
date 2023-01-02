import { BtnWrapper, LinkLogIn, LinkSignUp } from './AuthNavList.styled';

const AuthNavList = ({ ...props }) => {
  return (
    <BtnWrapper {...props}>
      <LinkLogIn to={'login'} title="Log In">
        Log In
      </LinkLogIn>
      <LinkSignUp to={'signup'} title="Sign Up">
        Sign Up
      </LinkSignUp>
    </BtnWrapper>
  );
};

export default AuthNavList;
