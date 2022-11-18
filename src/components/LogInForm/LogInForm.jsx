import { useLogInMutation } from 'redux/user/userApi';
// import { authorization } from 'redux/user/userSlice';

const LogInForm = () => {
  const [logIn] = useLogInMutation();
  // .then(({ token }) => authorization(token));

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInForm;
