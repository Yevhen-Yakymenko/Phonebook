import styled from 'styled-components';

import { Container } from 'components/GlobalStyle';

export const MainHeader = styled.header`
  background-color: ${p => p.theme.colors.white};

  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const StyledContainer = styled(Container)`
  min-height: 80px;
  display: flex;
  align-items: center;
`;
