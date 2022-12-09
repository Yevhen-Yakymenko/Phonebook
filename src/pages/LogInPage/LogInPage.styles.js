import styled from 'styled-components';

import { StyledSection, Container } from 'components/GlobalStyle';

export const LogInSection = styled(StyledSection)`
  background: linear-gradient(270deg, #eaf0ff 0%, #f6f9ff 100%);
`;

export const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
`;

export const ContentBox = styled.div`
  flex: 1 1 100%;
  padding-right: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 400px;
  padding-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px; ;
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
  padding-left: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
