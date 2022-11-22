import Logo from 'components/Logo';
import LogInForm from 'components/LogInForm';

import {
  LogInSection,
  ContentBox,
  ContentWrapper,
  ContentMainText,
  ContentText,
  FormBox,
} from './LogInPage.styles';

const LogInPage = () => {
  return (
    <LogInSection>
      <ContentBox>
        <ContentWrapper>
          <ContentMainText>desktop app</ContentMainText>
          <Logo logoColor="secondary" />
          <ContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste quisquam molestias?
          </ContentText>
        </ContentWrapper>
      </ContentBox>
      <FormBox>
        <LogInForm />
      </FormBox>
    </LogInSection>
  );
};

export default LogInPage;
