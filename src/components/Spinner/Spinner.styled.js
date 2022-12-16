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
  position: relative;

  display: inline-block;
  width: ${p => p.theme.space[3]}px;
  height: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.btnBgSecondary};

  border: 2px solid transparent;
  border-color: ${p => p.theme.colors.textAccent};
  border-radius: 100%;

  animation: ${rotate} 500ms ${p => p.theme.transitions.property} infinite;

  &::before,
  &::after {
    position: absolute;

    width: ${p => p.theme.space[1]}px;
    height: ${p => p.theme.space[1]}px;

    content: '';

    background-color: ${p => p.theme.colors.textAccent};

    border-radius: 100%;
  }

  &::before {
    left: 0;
    top: 0;
  }

  &::after {
    right: 0;
    bottom: 0;
  }
`;
