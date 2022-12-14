import styled from 'styled-components';
import { StyledSection, Container } from 'components/GlobalStyle';
import { NavLink } from 'react-router-dom';

export const ContactsSection = styled(StyledSection)`
  background-color: ${p => p.theme.colors.background};
`;

export const StyledContainer = styled(Container)`
  height: 100%;
`;

export const StyledLogoLink = styled(NavLink)`
  margin-right: ${p => p.theme.space[5]}px;
  display: flex;

  font-size: ${p => p.theme.fontSizes[8]}px;
  line-height: 1;
  color: ${p => p.theme.colors.textAccent};
`;

export const ContactsCtrl = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const BtnAdd = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
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
