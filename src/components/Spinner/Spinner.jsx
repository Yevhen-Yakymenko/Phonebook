import { StyledSpinnerBox } from './Spinner.styled';
import { ImSpinner9 } from 'react-icons/im';

const Spinner = ({ loading }) => {
  return (
    loading && (
      <StyledSpinnerBox>
        <ImSpinner9 />
      </StyledSpinnerBox>
    )
  );
};

export default Spinner;
