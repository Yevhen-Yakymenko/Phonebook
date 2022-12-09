import styled from 'styled-components';

export const BtnSbm = styled.button`
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.btnText};
  background-color: ${p => p.theme.colors.btnBackground};
  border-radius: ${p => p.theme.space[2]}px;
  border: 1px solid ${p => p.theme.colors.border};
  cursor: pointer;
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;
