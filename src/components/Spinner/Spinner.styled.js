import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinnerBox = styled.span`
  display: flex;

  font-size: ${p => p.theme.fontSizes[4]};
  color: inherit;

  transition: color ${p => p.theme.transitions.main};
  animation: ${rotate} 500ms ${p => p.theme.transitions.property} infinite;
`;
