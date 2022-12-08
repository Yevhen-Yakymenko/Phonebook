import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  position: relative;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${p => p.theme.colors.navMenu};

  transition: color 200ms linear, font-weight 200ms linear;

  &::after {
    position: absolute;
    right: 0;
    bottom: 24px;

    display: block;
    width: 100%;
    height: 2px;

    content: '';

    border-radius: 1px;

    background-color: palevioletred;

    opacity: 0;

    transition: opacity 200ms linear;
  }

  &::before {
    display: block;
    content: attr(title);
    font-weight: ${p => p.theme.fontWeights.bold};
    height: 0px;
    overflow: hidden;
    visibility: hidden;
  }

  &.active {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: palevioletred;

    &::after {
      opacity: 1;
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.logo};
  }
`;
