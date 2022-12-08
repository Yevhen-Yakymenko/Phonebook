import styled from 'styled-components';

import { Box } from 'components/Container/Container.styled';

export const SignUpSection = styled.section`
  flex: 1 1 100%;

  background: linear-gradient(270deg, #eaf0ff 0%, #f6f9ff 100%);
`;

export const Container = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormBox = styled.div`
  display: flex;
  /* justify-content: start; */
  /* align-items: center; */
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  box-shadow: 0px 5px 50px ${p => p.theme.colors.border};
`;

export const DecorBox = styled.div`
  position: absolute;
  font-size: 256px;
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  opacity: 0.1;
`;
