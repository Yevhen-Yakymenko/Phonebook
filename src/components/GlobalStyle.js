import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw; 
    overflow-x: hidden;
    }

  body {
    margin: 0 auto;
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
