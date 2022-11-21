import styled from 'styled-components';
import { GiCandlestickPhone } from 'react-icons/gi';

export const LogoBox = styled.div`
  padding: 0 ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.logo};
`;
export const LogoText = styled.h1`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogoIcon = styled(GiCandlestickPhone)``;
