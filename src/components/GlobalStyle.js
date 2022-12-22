import styled, { createGlobalStyle } from 'styled-components';

import { valueToRem } from 'utils/mixins';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw; 
    height: 100%;
    overflow-x: hidden;
    }

  body {
    margin: 0 auto;
    height: 100%;
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.bodyBackground};
    
    &.modal-open {
      overflow: hidden;
    }
  }

  main {
    flex: 1 1 100%;
    display: flex;
  }

  a {
    text-decoration: none;
  }
  
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
}
  #root {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .section-wrapper {
    flex: 1 1 100%;
    padding-top: calc(${p => p.theme.space[4] + valueToRem(p.headerHeight)});
    padding-bottom: ${p => p.theme.space[4]};
  } ;

  .container {
    max-width: ${p => p.theme.sizes.container}px;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[3]};    
  }

  .btnIconBox {
    display: flex;
  }

  .btnText {}

  .authMenu {
    @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)){
      top: ${p => valueToRem(p.headerHeight)};
    }
    
  }

`;

export const StyledSection = styled.section`
  flex: 1 1 100%;
  padding-top: calc(${valueToRem(32)});
  padding-bottom: ${valueToRem(32)};
`;

export const Container = styled.div`
  max-width: ${p => p.theme.sizes.container}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${p => p.theme.space[3]};
  padding-right: ${p => p.theme.space[3]};
`;

export const BtnIconBox = styled.span`
  display: flex;
`;

export const BtnText = styled.span``;
