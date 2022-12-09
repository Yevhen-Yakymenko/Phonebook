import { BtnSbm } from './FormBtnSbm.styled';

export const FormBtnSbm = ({ children, ...props }) => {
  return <BtnSbm {...props}>{children}</BtnSbm>;
};
