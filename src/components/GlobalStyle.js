import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import { valueToRem } from 'utils/mixins';

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
    margin-top: ${p => valueToRem(p.headerHeight)};
    padding-top: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[4]};
  }

  .container {
    max-width: ${p => p.theme.sizes.container}px;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[3]};
  }

  .page-title {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    visibility: hidden;
    pointer-events: none;
  };

  .auth-menu {
    @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)){
      top: ${p => valueToRem(p.headerHeight)};
    }
  }

  .btn-main {
    padding-top: ${p => p.theme.space[2]};
    padding-bottom: ${p => p.theme.space[2]};
    padding-right: ${p => p.theme.space[2]};
    padding-left: ${p => p.theme.space[2]};

    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[2]};

    font-weight: ${p => p.theme.fontWeights.bold};

    border: 1px solid transparent;
    border-radius: ${p => p.theme.space[2]};

    cursor: pointer;

    transition: color ${p => p.theme.transitions.main},
      background-color ${p => p.theme.transitions.main};

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      padding-right: ${p => p.theme.space[3]};
      padding-left: ${p => p.theme.space[3]};
    }
    
    &:hover,
    &:focus {
      color: ${p => p.theme.colors.white};
    }

    &__primary {
      color: ${p => p.theme.colors.btnText};
      background-color: ${p => p.theme.colors.btnBackground};
      border-color: ${p => p.theme.colors.btnAccent};

      &:hover,
      &:focus {
      background-color: ${p => p.theme.colors.btnAccent};
      }
    }

    &__secondary {
      color: ${p => p.theme.colors.textAccent};
      background-color: ${p => p.theme.colors.btnBgSecondary};
      border-color: ${p => p.theme.colors.textAccent};

      &:hover,
      &:focus {
        background-color: ${p => p.theme.colors.textAccent};
      }
    }

    &__icon-box {
      display: flex;

      @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[0]} - 0.6px)){
      }
    }

    &__text {
      @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[0]} - 0.6px)){
          display: none;
      }
    }
  }
`;
