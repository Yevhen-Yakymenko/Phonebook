import styled from 'styled-components';

import { StyledSection, Container } from 'components/GlobalStyle';

export const SignUpSection = styled(StyledSection)`
  background: linear-gradient(270deg, #eaf0ff 0%, #f6f9ff 100%);
`;

export const StyledContainer = styled(Container)`
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
