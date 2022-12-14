import { useState } from 'react';
import { useLogInMutation } from 'redux/user/userApi';

import { IoIosMail, IoIosLock } from 'react-icons/io';
import { IoCloseCircleSharp, IoEye, IoEyeOff } from 'react-icons/io5';

import LogoIcon from 'components/LogoIcon';
import {
  FormContainer,
  FormTitle,
  FormLabel,
  FormField,
  FormBtnSbm,
} from 'components/FormElements';

import {
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
    <FormContainer autoComplete="off" onSubmit={handleSubmit}>
      <FormTitle titleIcon={<LogoIcon />}>Log into your account</FormTitle>
      <div>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormField
          state={email}
          setState={setEmail}
          func={handleRemove}
          iconBefore={<IoIosMail />}
          iconAfter={<IoCloseCircleSharp />}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your e-mail"
          required
        />
      </div>

      <div>
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormField
          state={password}
          setState={setPassword}
          func={toglePassword}
          iconBefore={<IoIosLock />}
          iconAfter={inputType === 'password' ? <IoEye /> : <IoEyeOff />}
          type={inputType}
          name="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <FormBtnSbm type="submit">Log In</FormBtnSbm>

      <DecorBox>
        <DecorBoxLine />
        <DecorBoxText>or</DecorBoxText>
        <DecorBoxLine />
      </DecorBox>

      <StyledLink to={'/signup'}>Create new account</StyledLink>
    </FormContainer>
  );
};

export default LogInForm;
