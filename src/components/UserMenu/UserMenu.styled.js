import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const UserName = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const BtnLogOut = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.inputs};
  color: ${p => p.theme.colors.textAccent};

  background-color: ${p => p.theme.colors.btnBgSecondary};

  border: 1px solid transparent;
  border-radius: ${p => p.theme.space[2]}px;

  cursor: pointer;
  transition: color ${p => p.theme.transitions.main},
    background-color ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.textAccent};
  }
`;
