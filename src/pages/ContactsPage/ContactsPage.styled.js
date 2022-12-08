import styled from 'styled-components';
import { Box } from 'components/Container/Container.styled';

export const ContactsSection = styled.section`
  flex: 1 1 100%;
  background-color: ${p => p.theme.colors.background};
`;

export const Container = styled(Box)`
  height: 100%;
`;
