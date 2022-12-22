import styled from 'styled-components';

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.border};

  z-index: 10;
`;

export const StyledContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  display: flex;
  align-items: center;
  min-height: 70px;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    position: relative;
    z-index: 10;
  }

  @media screen and (min-width: calc(${p => p.theme.breakpoints[1]})) {
    min-height: 70px;
  }

  @media screen and (min-width: calc(${p => p.theme.breakpoints[2]})) {
    min-height: 80px;
  }
`;
