import styled from 'styled-components';

export const BtnSbm = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__primary',
}))`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  justify-content: center;

  line-height: ${p => p.theme.lineHeights.inputs};
  border-color: ${p => p.theme.colors.border};
`;
