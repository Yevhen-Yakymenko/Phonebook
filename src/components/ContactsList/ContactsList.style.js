import styled from 'styled-components';

export const StyledContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]};

  /* @media screen and (max-width: calc(${p =>
    p.theme.breakpoints[0]} - 0.6px)) {
    font-size: ${p => p.theme.fontSizes[3]};
  } */
`;

export const StyledText = styled.p``;
