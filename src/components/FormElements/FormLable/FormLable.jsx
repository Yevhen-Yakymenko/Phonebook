import { StyledLable } from './FormLable.styled';

export const FormLable = ({ children, ...props }) => {
  return <StyledLable {...props}>{children}</StyledLable>;
};
