import { useState } from 'react';
import { useSignUpMutation } from 'redux/user/userApi';

import {
  StyledForm,
  FormTitle,
  FormGroup,
  FormControl,
  StyledLable,
  StyledInput,
  IconClose,
  IconBox,
  IconEye,
  StyledInputSbm,
} from './SignUpForm.styled';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [signUp] = useSignUpMutation();

  const handleCange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    }

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
    signUp({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };

  const toglePassword = () => {
    if (inputType === 'password') {
      return setInputType('text');
    }

    return setInputType('password');
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <FormTitle>Sign Up</FormTitle>
      <FormGroup>
        <StyledLable htmlFor="name">Name</StyledLable>
        <FormControl>
          <StyledInput
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleCange}
          />
          {name.length > 0 && (
            <IconBox onClick={() => setName('')}>
              <IconClose />
            </IconBox>
          )}
        </FormControl>
      </FormGroup>

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
            <IconBox onClick={() => setEmail('')}>
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

      <StyledInputSbm type="submit" value="Sign Up" />
    </StyledForm>
  );
};

export default SignUpForm;
