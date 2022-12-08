import { useState } from 'react';
import { useLogInMutation } from 'redux/user/userApi';

import {
  StyledForm,
  FormGroup,
  FormField,
  StyledLable,
  StyledInput,
  IconClose,
  IconBox,
  IconEye,
  IconEyeOff,
  BtnSbm,
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

  const handleChange = e => {
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
        <FormField>
          <StyledInput
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
          {email.length > 0 && (
            <IconBox onClick={() => handleRemove()}>
              <IconClose />
            </IconBox>
          )}
        </FormField>
      </FormGroup>

      <FormGroup>
        <StyledLable htmlFor="password">Password</StyledLable>
        <FormField>
          <StyledInput
            type={inputType}
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
          {password.length > 0 && (
            <IconBox onClick={() => toglePassword()}>
              {inputType === 'password' ? <IconEye /> : <IconEyeOff />}
            </IconBox>
          )}
        </FormField>
      </FormGroup>

      <BtnSbm type="submit">Log In</BtnSbm>

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
