import { forwardRef } from 'react';
import { MainHeader, StyledContainer } from './AppBar.styled';

const AppBar = forwardRef((props, ref) => {
  return (
    <MainHeader ref={ref}>
      <StyledContainer>{props.children}</StyledContainer>
    </MainHeader>
  );
});

export default AppBar;
