import { StyledForm } from './FormContainer.styled';

export const FormContainer = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};
