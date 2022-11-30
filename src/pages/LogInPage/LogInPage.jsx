import Logo from 'components/Logo';
import LogInForm from 'components/LogInForm';

import {
  LogInSection,
  Container,
  ContentBox,
  ContentWrapper,
  ContentMainText,
  ContentText,
  FormBox,
} from './LogInPage.styles';

const LogInPage = () => {
  return (
    <LogInSection>
      <Container>
        <ContentBox>
          <ContentWrapper>
            <ContentMainText>desktop app</ContentMainText>
            <h2>
              <Logo />
            </h2>
            <ContentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium iste quisquam molestias?
            </ContentText>
          </ContentWrapper>
        </ContentBox>
        <FormBox>
          <LogInForm />
        </FormBox>
      </Container>
    </LogInSection>
  );
};

export default LogInPage;
