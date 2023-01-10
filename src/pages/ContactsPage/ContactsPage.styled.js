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
  margin-right: ${p => p.theme.space[3]};
  display: flex;

  font-size: ${p => p.theme.fontSizes[8]};
  line-height: 1;
  color: ${p => p.theme.colors.textAccent};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: ${p => p.theme.space[3]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: ${p => p.theme.space[5]};
  }
`;

export const ContactsCtrl = styled.div`
  flex: 2 1;
  display: flex;
  gap: ${p => p.theme.space[3]};
`;

export const BtnAdd = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__primary',
}))`
  padding-right: 0.8125rem;
  padding-left: 0.8125rem;

  border-color: ${p => p.theme.colors.border};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-right: ${p => p.theme.space[3]};
    padding-left: ${p => p.theme.space[3]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-right: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};
  }

  & > .btn-main__icon-box {
    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[0]} - 0.6px)) {
    }
  }

  & > .btn-main__text {
    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[1]} - 0.6px)) {
      display: none;
    }
  }
`;
