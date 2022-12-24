import styled from 'styled-components';

export const BurgerBtn = styled.button`
  margin-left: auto;
  padding: ${p => p.theme.space[2]};

  font-size: ${p => p.theme.fontSizes[7]};
  color: ${p => p.theme.colors.text};

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: color ${p => p.theme.transitions.main};

  :hover,
  :focus {
    color: ${p => p.theme.colors.btnText};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    display: none;
  }
`;

export const BurgerIconBox = styled.span`
  display: flex;
`;
