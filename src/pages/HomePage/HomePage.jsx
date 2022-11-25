import {
  HomePageSection,
  DecorBox,
  StyledLink,
  StyledIconPhone,
  StyledIconBook,
  StyledIconPlus,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <DecorBox></DecorBox>
      <StyledLink to={'login'}>
        <StyledIconPhone />
        <StyledIconPlus />
        <StyledIconBook />
      </StyledLink>
    </HomePageSection>
  );
};

export default HomePage;
