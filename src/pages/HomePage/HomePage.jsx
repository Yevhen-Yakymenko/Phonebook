import PageTitle from 'components/PageTitle';

import {
  HomePageSection,
  DecorBox,
  StyledContainer,
  ContentBox,
  ContentText,
  ContentLink,
  StyledIconPhone,
  StyledIconBook,
  StyledIconPlus,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <PageTitle>Phonebook app home page</PageTitle>
      <DecorBox></DecorBox>
      <StyledContainer>
        <ContentBox>
          <ContentText>do you want to know what it means?</ContentText>
          <ContentLink to={'login'}>
            <StyledIconPhone />
            <StyledIconPlus />
            <StyledIconBook />
          </ContentLink>
          <ContentText>click on the link above</ContentText>
        </ContentBox>
      </StyledContainer>
    </HomePageSection>
  );
};

export default HomePage;
