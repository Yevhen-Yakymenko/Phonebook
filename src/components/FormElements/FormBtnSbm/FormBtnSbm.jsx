import Spinner from 'components/Spinner';

import { BtnSbm } from './FormBtnSbm.styled';

export const FormBtnSbm = ({ loading, children, ...props }) => {
  return (
    <BtnSbm {...props}>
      <Spinner loading={loading} />
      {children}
    </BtnSbm>
  );
};
