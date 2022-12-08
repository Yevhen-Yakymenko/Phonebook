import { useState } from 'react';
import { useSignUpMutation } from 'redux/user/userApi';

import {
  StyledForm,
  FormTitle,
  FormGroup,
  FormField,
  StyledLable,
  StyledInput,
  IconBox,
  IconClose,
  IconEye,
  IconEyeOff,
  BtnSbm,
} from './SignUpForm.styled';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [signUp] = useSignUpMutation();

  const handleChange = e => {
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
        <FormField>
          <StyledInput
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleChange}
          />
          {name.length > 0 && (
            <IconBox onClick={() => setName('')}>
              <IconClose />
            </IconBox>
          )}
        </FormField>
      </FormGroup>

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
            <IconBox onClick={() => setEmail('')}>
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

      <BtnSbm type="submit">Sign Up</BtnSbm>
    </StyledForm>
  );
};

export default SignUpForm;
