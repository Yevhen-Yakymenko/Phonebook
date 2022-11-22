import styled from 'styled-components';

export const MainHeader = styled.header`
  height: 80px;
  padding: 0 ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const NavContainer = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
`;
