import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnWrapper = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: end;
  gap: ${p => p.theme.space[3]}px;
`;

export const SyledLink = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.btnText};
  background: ${p => p.theme.colors.btnBackground};
  border-radius: ${p => p.theme.space[2]}px;
  border: 1px solid ${p => p.theme.colors.border};
  cursor: pointer;
  transition: color 100ms linear, background 100ms linear;

  &:hover {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.btnAccent};
  }
`;

export const StyledLinkSecondary = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.btnAccent};
  border-radius: ${p => p.theme.space[2]}px;
  cursor: pointer;
  transition: opacity 100ms linear;

  &:hover {
    opacity: 0.8;
  }
`;
