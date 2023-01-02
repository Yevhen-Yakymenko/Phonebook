import styled from 'styled-components';

import { valueToRem } from 'utils/mixins';

export const BtnSbm = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__primary',
}))`
  padding-top: ${valueToRem(10)};
  padding-bottom: ${valueToRem(10)};
  justify-content: center;

  line-height: ${p => p.theme.lineHeights.inputs};
  border-color: ${p => p.theme.colors.border};
`;
