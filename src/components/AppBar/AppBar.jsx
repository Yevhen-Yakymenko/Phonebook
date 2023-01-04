import { useEffect, useRef } from 'react';
import { MainHeader, StyledContainer } from './AppBar.styled';

const AppBar = ({ getHeight, children }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const handleResize = () => {
      getHeight(header.offsetHeight);
    };

    if (document.readyState === 'complete') {
      handleResize();
    } else {
      window.addEventListener('load', handleResize);
    }

    return () => {
      window.removeEventListener('load', handleResize);
    };
  }, [getHeight]);

  return (
    <MainHeader ref={headerRef}>
      <StyledContainer>{children}</StyledContainer>
    </MainHeader>
  );
};

export default AppBar;
