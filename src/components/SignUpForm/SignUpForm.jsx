import { useSignUpMutation } from 'redux/user/userApi';

const SignUpForm = () => {
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

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
