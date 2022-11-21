import Logo from 'components/Logo';
import LogInForm from 'components/LogInForm';

import { LogInSection, ContentBox, FormBox } from './LogInPage.styles';

const LogInPage = () => {
  return (
    <LogInSection>
      <ContentBox>
        <Logo />
      </ContentBox>
      <FormBox>
        <LogInForm />
      </FormBox>
    </LogInSection>
  );
};

export default LogInPage;
