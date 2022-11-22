import SignUpForm from 'components/SignUpForm';

import { SignUpSection, FormBox } from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignUpSection>
      <FormBox>
        <SignUpForm />
      </FormBox>
    </SignUpSection>
  );
};

export default SignUpPage;
