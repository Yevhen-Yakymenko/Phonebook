import { useState } from 'react';
import { useLogInMutation } from 'redux/user/userApi';

import {
  StyledForm,
  FormGroup,
  FormControl,
  StyledLable,
  StyledInput,
  IconClose,
  IconBox,
  IconEye,
  StyledInputSbm,
  StyledLink,
  DecorBox,
  DecorBoxLine,
  DecorBoxText,
} from './LogInForm.styled';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [logIn] = useLogInMutation();

  const handleCange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };

  const handleRemove = () => {
    setEmail('');
  };

  const toglePassword = () => {
    if (inputType === 'password') {
      return setInputType('text');
    }

    return setInputType('password');
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <FormGroup>
        <StyledLable htmlFor="email">E-mail</StyledLable>
        <FormControl>
          <StyledInput
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleCange}
          />
          {email.length > 0 && (
            <IconBox onClick={() => handleRemove()}>
              <IconClose />
            </IconBox>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <StyledLable htmlFor="password">Password</StyledLable>
        <FormControl>
          <StyledInput
            type={inputType}
            name="password"
            id="password"
            required
            onChange={handleCange}
          />
          {password.length > 0 && (
            <IconBox onClick={() => toglePassword()}>
              <IconEye />
            </IconBox>
          )}
        </FormControl>
      </FormGroup>

      <StyledInputSbm type="submit" value="Log In" />

      <DecorBox>
        <DecorBoxLine />
        <DecorBoxText>or</DecorBoxText>
        <DecorBoxLine />
      </DecorBox>

      <StyledLink to={'/signup'}>Create new account</StyledLink>
    </StyledForm>
  );
};

export default LogInForm;
