import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogoLink = styled(NavLink)`
  display: flex;
  align-content: center;
  gap: ${p => p.theme.space[1]};
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes[7]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1;
  color: ${p => p.theme.colors.textAccent};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    gap: ${p => p.theme.space[2]};

    font-size: ${p => p.theme.fontSizes[8]};
  }
`;
