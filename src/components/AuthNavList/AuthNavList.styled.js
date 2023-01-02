import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    gap: ${p => p.theme.space[3]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    margin-left: auto;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[2]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: ${p => p.theme.space[3]};
  }
`;

export const StyledLink = styled(NavLink)`
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[2]};

  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1;
  text-align: center;

  border: 1px solid transparent;
  border-radius: ${p => p.theme.radii[0]};

  transition: font-weight ${p => p.theme.transitions.main};

  :hover,
  :focus {
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  ::after {
    display: block;
    content: attr(title);
    font-weight: ${p => p.theme.fontWeights.bold};
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    min-width: 120px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    min-width: 60px;

    font-size: ${p => p.theme.fontSizes[4]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: ${p => p.theme.space[2]};
    padding-bottom: ${p => p.theme.space[2]};
    padding-left: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[3]};

    min-width: 100px;
  } ;
`;

export const LinkLogIn = styled(StyledLink)`
  color: ${p => p.theme.colors.btnText};
  background-color: ${p => p.theme.colors.btnBackground};
  border-color: ${p => p.theme.colors.border};

  transition: color ${p => p.theme.transitions.main},
    background-color ${p => p.theme.transitions.main};

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;

export const LinkSignUp = styled(StyledLink)`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.btnAccent};
  transition: opacity ${p => p.theme.transitions.main};

  :hover,
  :focus {
    opacity: 0.7;
  }
`;
