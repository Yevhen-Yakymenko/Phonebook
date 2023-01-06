import img from 'images/1.jpg';

import {
  HomePageSection,
  DecorBox,
  StyledContainer,
  ContentBox,
  ContentLink,
  MediaBox,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <h1 className="page-title">Phonebook app home page</h1>
      <DecorBox></DecorBox>
      <StyledContainer>
        <ContentBox>
          <p>Contacts database</p>
          <h2>All your contacts in one place</h2>
          <p>
            View and manage contacts stored in the app on any device, and a
            convenient search makes it easy to find contact information whenever
            needed.
          </p>
          <ContentLink to={'login'} aria-label="link to log in page">
            Log into your account
          </ContentLink>
        </ContentBox>
        <MediaBox>
          <img src={img} alt="img" />
        </MediaBox>
      </StyledContainer>
    </HomePageSection>
  );
};

export default HomePage;
