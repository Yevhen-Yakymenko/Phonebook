import {
  FieldBox,
  StyledInput,
  IconBoxBefore,
  IconBoxAfter,
} from './FormField.styled';

export const FormField = ({
  state,
  setState,
  func,
  iconBefore,
  iconAfter,
  ...props
}) => {
  const handleChange = e => {
    const { value } = e.currentTarget;

    setState(value);
  };

  return (
    <FieldBox>
      <StyledInput {...props} value={state} onChange={handleChange} />
      {iconBefore && <IconBoxBefore>{iconBefore}</IconBoxBefore>}

      {state.length > 0 && (
        <IconBoxAfter type="button" onClick={() => func()}>
          {iconAfter}
        </IconBoxAfter>
      )}
    </FieldBox>
  );
};
