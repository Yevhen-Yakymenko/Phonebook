import { StyledLabel } from './FormLabel.styled';

export const FormLabel = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
