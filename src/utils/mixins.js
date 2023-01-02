import { css } from 'styled-components';

export const valueToRem = (value, base = 16) => `
  calc(${value / base} * 1rem)
`;

const containerMaxWidth = css`
  ${p => p.theme.sizes.container}
`;

export const adaptivFont = (pcSize, mobSize) => {
  const addSize = pcSize - mobSize;
  const addMobSize = addSize + addSize * 0.7;

  return css`
    @media screen and (max-width: 767px) {
    }

    @media screen and (max-width: 767px) {
      font-size: calc(
        ${mobSize}px + ${addMobSize} * ((100vw - 320px) / ${containerMaxWidth})
      );
    }

    @media screen and (min-width: 767px) and (max-width: ${containerMaxWidth}px) {
      font-size: calc(
        ${mobSize}px + ${addSize} * (100vw / ${containerMaxWidth})
      );
    }

    @media screen and (min-width: ${containerMaxWidth}px) {
      font-size: ${pcSize}px;
    }
  `;
};
