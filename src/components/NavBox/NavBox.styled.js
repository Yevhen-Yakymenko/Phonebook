import styled from 'styled-components';

export const NavWrapper = styled.div.attrs(_ => ({
  className: 'nav-box',
}))`
  display: flex;

  &.menu--open {
    transform: translateX(100%);
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    position: fixed;
    left: -100%;
    padding-top: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[2]};
    padding-right: ${p => p.theme.space[2]};
    width: 100%;
    /* height: 100%; */
    flex-direction: column;
    align-items: center;
    gap: ${p => p.theme.space[3]};

    background-color: ${p => p.theme.colors.white};
    border-bottom: 1px solid ${p => p.theme.colors.border};

    overflow-y: scroll;

    z-index: 5;

    transition: transform ${p => p.theme.transitions.main};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    width: 100%;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[2]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: ${p => p.theme.space[3]};
  }
`;
