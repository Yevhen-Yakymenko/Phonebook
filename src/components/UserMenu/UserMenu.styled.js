import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const MenuWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const UserName = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const BtnLogOut = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  padding: 0;
  background: ${p => p.theme.colors.btnBackground};
  color: ${p => p.theme.colors.text};
  border: 2px solid ${p => p.theme.colors.btnAccent};
  border-radius: 50%;
  cursor: pointer;
  transition: color 200ms linear, border 200ms linear, background 200ms linear;

  &:hover {
    color: ${p => p.theme.colors.white};
    border: 2px solid ${p => p.theme.colors.border};
    background: ${p => p.theme.colors.btnAccent};
  }
`;

export const BtnIcon = styled(FiLogOut)`
  width: ${p => p.theme.fontSizes[5]}px;
  height: ${p => p.theme.fontSizes[5]}px;
  vertical-align: middle;
  /* transform: rotate(180deg); */
`;
