import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[4]}px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  z-index: 4;
`;
