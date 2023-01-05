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
  display: flex;
  align-items: center;
`;

export const ContentBox = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: ${p => p.theme.space[4]};

  & > h2 {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: 36px;
    line-height: 45px;

    color: ${p => p.theme.colors.heading};
  }

  & > p {
    font-family: ${p => p.theme.fonts.secondary};

    :first-child {
      font-weight: ${p => p.theme.fontWeights.medium};
      font-size: 12px;
      line-height: 1.2;

      letter-spacing: 0.1em;
      text-transform: uppercase;

      color: ${p => p.theme.colors.heading};
    }

    :nth-child(3) {
      font-size: 16px;
      line-height: 2;
      letter-spacing: 0.03em;
    }
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    padding-left: ${p => p.theme.space[5]};
    padding-right: ${p => p.theme.space[5]};
  }
`;

export const MediaBox = styled.div`
  flex: 1 1 100%;

  border-radius: ${p => p.theme.radii[0]};

  overflow: hidden;

  box-shadow: 0px 20px 40px rgba(53, 60, 115, 0.15);

  filter: drop-shadow(0px 100px 150px #f2f6ff);

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    display: none;
  }
`;

export const ContentLink = styled(NavLink)`
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.textAccent};
  border-radius: ${p => p.theme.radii[0]};

  opacity: 0.4;
  z-index: 1;
  transition: opacity ${p => p.theme.transitions.main};

  :hover {
    opacity: 1;
  }
`;
