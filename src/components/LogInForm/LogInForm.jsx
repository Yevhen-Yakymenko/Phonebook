import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosMail, IoIosLock } from 'react-icons/io';
import { IoCloseCircleSharp, IoEye, IoEyeOff } from 'react-icons/io5';

import { useLogInMutation } from 'redux/user/userApi';
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
  const [logIn, { isLoading, isError, error }] = useLogInMutation();

  const message =
    isError &&
    (error.status === 400
      ? 'Invalid login or password. Try again.'
      : 'Something went wrong :(');

  useEffect(() => {
    const notify = () => toast.error(message);
    if (isError) {
      notify();
    }
  }, [isError, message]);

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
    <>
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

        <FormBtnSbm loading={isLoading} disabled={isLoading} type="submit">
          Log In
        </FormBtnSbm>

        <DecorBox>
          <DecorBoxLine />
          <DecorBoxText>or</DecorBoxText>
          <DecorBoxLine />
        </DecorBox>

        <StyledLink to={'/signup'}>Create new account</StyledLink>
      </FormContainer>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </>
  );
};

export default LogInForm;
