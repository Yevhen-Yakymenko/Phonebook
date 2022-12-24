import styled from 'styled-components';

export const ContentBox = styled.div`
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes[8]};
  color: ${p => p.theme.colors.textAccent};
`;

export const StyledTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[6]};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.heading};
`;
