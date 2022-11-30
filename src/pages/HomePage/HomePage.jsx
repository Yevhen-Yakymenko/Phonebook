// import Container from 'components/Container';

import {
  HomePageSection,
  DecorBox,
  Container,
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
      <DecorBox></DecorBox>
      <Container>
        <ContentBox>
          <ContentText>do you want to know what it means?</ContentText>
          <ContentLink to={'login'}>
            <StyledIconPhone />
            <StyledIconPlus />
            <StyledIconBook />
          </ContentLink>
          <ContentText>click on the link above</ContentText>
        </ContentBox>
      </Container>
    </HomePageSection>
  );
};

export default HomePage;
