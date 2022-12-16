import { StyledSpinnerBox } from './Spinner.styled';

const Spinner = ({ loading }) => {
  return loading && <StyledSpinnerBox></StyledSpinnerBox>;
};

export default Spinner;
