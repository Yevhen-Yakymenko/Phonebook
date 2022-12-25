import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContactsSection = styled.section.attrs(_ => ({
  className: 'section-wrapper',
}))`
  background-color: ${p => p.theme.colors.background};
`;

export const StyledContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  height: 100%;
`;

export const StyledLogoLink = styled(NavLink)`
  margin-right: ${p => p.theme.space[5]};
  display: flex;

  font-size: ${p => p.theme.fontSizes[8]};
  line-height: 1;
  color: ${p => p.theme.colors.textAccent};
`;

export const ContactsCtrl = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]};
`;

export const BtnAdd = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__primary',
}))`
  padding-right: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[4]};

  border-color: ${p => p.theme.colors.border};
`;
