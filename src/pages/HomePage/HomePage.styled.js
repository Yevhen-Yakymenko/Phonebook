import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageSection = styled.section.attrs(props => ({
  className: 'section-wrapper',
}))`
  position: relative;
  background: linear-gradient(180deg, #f4f7ff 0%, #f1f5ff 100%);
`;

export const DecorBox = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(75, 113, 255, 0) -0.13%,
    rgba(107, 137, 248, 0.4) 131.12%
  );
`;

export const StyledContainer = styled.div.attrs(props => ({
  className: 'container',
}))`
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]};
`;

export const ContentText = styled.p`
  font-family: ${p => p.theme.fonts.secondary};
  color: black;

  :last-child {
    align-self: flex-end;
  }
`;

export const ContentLink = styled(NavLink)`
  display: flex;
  gap: ${p => p.theme.space[5]};
  align-items: center;
  color: palevioletred;
  opacity: 0.4;
  z-index: 1;
  transition: opacity ${p => p.theme.transitions.main};

  :hover {
    opacity: 1;
  }
`;
