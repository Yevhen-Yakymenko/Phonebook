import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[4]};
  min-width: 300px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]};
  box-shadow: 0px 5px 50px ${p => p.theme.colors.border};

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    margin: 0 auto;
  }
`;
