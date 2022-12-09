import PageTitle from 'components/PageTitle';
import LogoIcon from 'components/LogoIcon';
import LogInForm from 'components/LogInForm';

import {
  LogInSection,
  StyledContainer,
  ContentBox,
  ContentWrapper,
  ContentMainText,
  ContentText,
  FormBox,
} from './LogInPage.styles';

const LogInPage = () => {
  return (
    <LogInSection>
      <StyledContainer>
        <PageTitle>Log in page</PageTitle>
        <ContentBox>
          <ContentWrapper>
            <ContentMainText>desktop app</ContentMainText>
            <h2>
              Phone <LogoIcon /> book
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
      </StyledContainer>
    </LogInSection>
  );
};

export default LogInPage;
