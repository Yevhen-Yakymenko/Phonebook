import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogoLink = styled(NavLink)`
  display: flex;
  align-content: center;
  gap: 8px;

  font-size: ${p => p.theme.fontSizes[7]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1;
  color: ${p => p.theme.colors.textAccent};
`;
