import styled from 'styled-components';

import { valueToRem } from 'utils/mixins';

export const BtnSbm = styled.button`
  padding-top: ${valueToRem(10)};
  padding-bottom: ${valueToRem(10)};
  padding-left: ${p => p.theme.space[3]};
  padding-right: ${p => p.theme.space[3]};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[2]};

  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.inputs};
  color: ${p => p.theme.colors.btnText};

  background-color: ${p => p.theme.colors.btnBackground};

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]};

  cursor: pointer;

  transition: color ${p => p.theme.transitions.main},
    background-color ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;
