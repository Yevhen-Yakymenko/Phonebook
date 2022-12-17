import PageTitle from 'components/PageTitle';
import SignUpForm from 'components/SignUpForm';

import {
  SignUpSection,
  StyledContainer,
  FormBox,
  DecorBox,
} from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignUpSection>
      <StyledContainer>
        <PageTitle>Sing up page</PageTitle>
        <FormBox>
          <SignUpForm />
        </FormBox>
        <DecorBox>PhoneBook</DecorBox>
      </StyledContainer>
    </SignUpSection>
  );
};

export default SignUpPage;
