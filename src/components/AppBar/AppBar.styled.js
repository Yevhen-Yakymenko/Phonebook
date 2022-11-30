import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from 'components/Container/Container.styled';

export const MainHeader = styled.header`
  background-color: ${p => p.theme.colors.white};

  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

export const SiteNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLogoLink = styled(NavLink)`
  margin-right: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes[7]}px;
  font-weight: 900;
  color: palevioletred;
`;

export const NavContainer = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
`;
