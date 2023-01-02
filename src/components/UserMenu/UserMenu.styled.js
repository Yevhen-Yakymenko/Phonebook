import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]};

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    margin: 0 auto;
    flex-direction: column;
    gap: ${p => p.theme.space[4]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    margin-left: auto;
    flex-wrap: wrap;
  }
`;

export const UserName = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const BtnLogOut = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__secondary',
}))`
  border-color: transparent;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    min-width: 180px;
    width: 100%;
    justify-content: center;

    padding-top: ${p => p.theme.space[3]};
    padding-bottom: ${p => p.theme.space[3]};
    padding-left: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[3]};
  }

  & > .btn-main__icon-box {
    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[0]} - 0.6px)) {
    }
  }

  & > .btn-main__text {
    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[0]} - 0.6px)) {
      display: block;
    }

    @media screen and (min-width: ${p =>
        p.theme.breakpoints[0]}) and (max-width: calc(${p =>
        p.theme.breakpoints[1]} - 0.6px)) {
      display: none;
    }
  }
`;
