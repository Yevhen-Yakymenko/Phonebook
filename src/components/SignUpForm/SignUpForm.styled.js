import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[4]};
  min-width: 288px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  z-index: 4;
`;
