import SignUpForm from 'components/SignUpForm';

import {
  SignUpSection,
  Container,
  FormBox,
  DecorBox,
} from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignUpSection>
      <Container>
        <FormBox>
          <SignUpForm />
        </FormBox>
        <DecorBox>PhoneBook</DecorBox>
      </Container>
    </SignUpSection>
  );
};

export default SignUpPage;
