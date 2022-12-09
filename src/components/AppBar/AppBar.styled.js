import styled from 'styled-components';

import { Box } from 'components/Container/Container.styled';

export const MainHeader = styled.header`
  background-color: ${p => p.theme.colors.white};

  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const Container = styled(Box)`
  min-height: 80px;
  display: flex;
  align-items: center;
`;
