import styled from 'styled-components';

import { adaptivFont } from 'utils/mixins';

export const SignUpSection = styled.section.attrs(_ => ({
  className: 'section-wrapper',
}))`
  background: linear-gradient(270deg, #eaf0ff 0%, #f6f9ff 100%);
`;

export const StyledContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormBox = styled.div`
  display: flex;
  min-width: 288px;
  max-width: 420px;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]};
  box-shadow: 0px 5px 50px ${p => p.theme.colors.border};
`;

export const DecorBox = styled.div`
  display: none;

  font-size: ${adaptivFont(256, 50)};
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  opacity: 0.1;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
