import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DecorBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]};
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
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${p => p.theme.space[3]};
  padding-right: ${p => p.theme.space[3]};
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.inputs};
  color: ${p => p.theme.colors.white};

  background-color: ${p => p.theme.colors.btnAccent};

  border-radius: ${p => p.theme.space[2]};

  cursor: pointer;
  transition: opacity ${p => p.theme.transitions.main},
    font-weight ${p => p.theme.transitions.main};

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
