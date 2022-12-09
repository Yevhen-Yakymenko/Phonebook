import { useState } from 'react';
import { useSignUpMutation } from 'redux/user/userApi';
import { IoIosMail, IoIosLock, IoIosPerson } from 'react-icons/io';
import { IoCloseCircleSharp, IoEye, IoEyeOff } from 'react-icons/io5';

import LogoIcon from 'components/LogoIcon';
import {
  FormTitle,
  FormLable,
  FormField,
  FormBtnSbm,
} from 'components/FormElements';

import { StyledForm } from './SignUpForm.styled';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [signUp] = useSignUpMutation();

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
      <FormTitle titleIcon={<LogoIcon />}>Get started your book</FormTitle>
      <div>
        <FormLable htmlFor="name">Name</FormLable>
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
        <FormLable htmlFor="email">E-mail</FormLable>
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
        <FormLable htmlFor="password">Password</FormLable>
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

      <FormBtnSbm type="submit">Sign Up</FormBtnSbm>
    </StyledForm>
  );
};

export default SignUpForm;
