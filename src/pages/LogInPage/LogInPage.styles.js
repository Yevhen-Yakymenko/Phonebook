import styled from 'styled-components';

export const LogInSection = styled.section.attrs(_ => ({
  className: 'section-wrapper',
}))`
  background: linear-gradient(270deg, #eaf0ff 0%, #f6f9ff 100%);
`;

export const StyledContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ContentBox = styled.div`
  display: none;
  flex: 1 1 100%;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-right: ${p => p.theme.space[4]};

    display: flex;
    justify-content: end;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: ${p => p.theme.space[5]};
  }
`;

export const ContentWrapper = styled.div`
  min-width: 300px;
  max-width: 400px;
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]};
`;

export const ContentTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]};

  font-size: ${p => p.theme.fontSizes[7]};
  color: ${p => p.theme.colors.logo};
`;

export const ContentMainText = styled.p`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  text-transform: uppercase;
  color: ${p => p.theme.colors.heading};
`;

export const ContentText = styled.p`
  font-family: ${p => p.theme.fonts.secondary};
  line-height: ${p => p.theme.lineHeights.text};
  color: ${p => p.theme.colors.text};
`;

export const FormBox = styled.div`
  flex: 1 1 100%;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: ${p => p.theme.space[5]};
  }
`;
