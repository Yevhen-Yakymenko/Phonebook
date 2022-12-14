import { MainHeader, StyledContainer } from './AppBar.styled';

const AppBar = ({ children }) => {
  return (
    <MainHeader>
      <StyledContainer>{children}</StyledContainer>
    </MainHeader>
  );
};

export default AppBar;
