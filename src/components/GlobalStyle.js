import styled, { createGlobalStyle } from 'styled-components';

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
`;

export const StyledSection = styled.section`
  flex: 1 1 100%;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const Container = styled.div`
  width: 1432px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
`;
