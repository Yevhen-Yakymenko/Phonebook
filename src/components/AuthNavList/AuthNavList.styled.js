import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnWrapper = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: end;
  gap: ${p => p.theme.space[3]}px;
`;

export const StyledLink = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  border-radius: ${p => p.theme.space[2]}px;
  transition: font-weight 100ms linear;

  &:hover {
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  &::after {
    display: block;
    content: attr(title);
    font-weight: ${p => p.theme.fontWeights.bold};
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

export const LinkLogIn = styled(StyledLink)`
  color: ${p => p.theme.colors.btnText};
  background: ${p => p.theme.colors.btnBackground};
  border: 1px solid ${p => p.theme.colors.border};
  transition: color 100ms linear, background 100ms linear;

  &:hover {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.btnAccent};
  }
`;

export const LinkSignUp = styled(StyledLink)`
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.btnAccent};
  transition: opacity 100ms linear;

  &:hover {
    opacity: 0.7;
  }
`;
