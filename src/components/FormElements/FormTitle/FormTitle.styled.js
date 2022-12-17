import styled from 'styled-components';

export const ContentBox = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  font-size: ${p => p.theme.fontSizes[8]}px;
  color: ${p => p.theme.colors.textAccent};
`;

export const StyledTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.heading};
`;
