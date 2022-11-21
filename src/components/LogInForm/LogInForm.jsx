import { useLogInMutation } from 'redux/user/userApi';

import { StyledForm, StyledLable, StyledInput } from './LogInForm.styled';

const LogInForm = () => {
  const [logIn] = useLogInMutation();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <StyledLable>
        Email
        <StyledInput type="email" name="email" required />
      </StyledLable>
      <StyledLable>
        Password
        <StyledInput type="password" name="password" required />
      </StyledLable>
      <button type="submit">Log In</button>
    </StyledForm>
  );
};

export default LogInForm;
