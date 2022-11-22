import {
  BtnWrapper,
  SyledLink,
  StyledLinkSecondary,
} from './AuthNavList.styled';

const AuthNavList = () => {
  return (
    <BtnWrapper>
      <SyledLink to={'login'}>Log In</SyledLink>
      <StyledLinkSecondary to={'signup'}>Sign Up</StyledLinkSecondary>
    </BtnWrapper>
  );
};

export default AuthNavList;
