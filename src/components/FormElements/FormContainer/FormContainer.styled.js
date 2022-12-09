import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[4]}px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  box-shadow: 0px 5px 50px ${p => p.theme.colors.border};
`;
