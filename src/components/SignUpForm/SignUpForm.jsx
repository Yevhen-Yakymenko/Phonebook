import { useState, useEffect } from 'react';
import { IoIosMail, IoIosLock, IoIosPerson } from 'react-icons/io';
import { IoCloseCircleSharp, IoEye, IoEyeOff } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';

import { useSignUpMutation } from 'redux/user/userApi';
import LogoIcon from 'components/LogoIcon';
import {
  FormTitle,
  FormLabel,
  FormField,
  FormBtnSbm,
} from 'components/FormElements';

import { StyledForm } from './SignUpForm.styled';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [signUp, { isLoading, isError, error }] = useSignUpMutation();

  const message =
    isError &&
    (error.status === 400
      ? 'This email is already in use..'
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
    <>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <FormTitle titleIcon={<LogoIcon />}>Get started your book</FormTitle>
        <div>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormField
            state={name}
            setState={setName}
            func={() => setName('')}
            iconBefore={<IoIosPerson />}
            iconAfter={<IoCloseCircleSharp />}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormField
            state={email}
            setState={setEmail}
            func={() => setEmail('')}
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
          Sign Up
        </FormBtnSbm>
      </StyledForm>
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

export default SignUpForm;
