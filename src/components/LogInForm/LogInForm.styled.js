import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DecorBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
`;

export const DecorBoxLine = styled.div`
  flex: 1 1 auto;
  height: 1px;
  background-color: ${p => p.theme.colors.border};
`;

export const DecorBoxText = styled.p`
  color: #adb3cb;
`;

export const StyledLink = styled(NavLink)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.btnAccent};
  border-radius: ${p => p.theme.space[2]}px;
  cursor: pointer;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    font-weight: ${p => p.theme.fontWeights.bold};
    opacity: 0.8;
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
