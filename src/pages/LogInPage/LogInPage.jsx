import LogoIcon from 'components/LogoIcon';
import LogInForm from 'components/LogInForm';

import {
  LogInSection,
  StyledContainer,
  ContentBox,
  ContentWrapper,
  ContentTitle,
  ContentMainText,
  ContentText,
  FormBox,
} from './LogInPage.styles';

const LogInPage = () => {
  return (
    <LogInSection>
      <StyledContainer>
        <h2 className="page-title">Log in page</h2>
        <ContentBox>
          <ContentWrapper>
            <ContentMainText>desktop and mobile app</ContentMainText>
            <ContentTitle>
              Phone <LogoIcon /> book
            </ContentTitle>
            <ContentText>
              A convenient way to store, view and manage your contacts in one
              click, which saves you time and money.
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
