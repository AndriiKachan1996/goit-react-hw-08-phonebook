import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './LoginForm.module.css';
import { login } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleSumbit = e => {
    console.log(isLoggedIn);
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    if (isLoggedIn) {
      form.reset();
    }
  };

  return (
    <div className={css['login-box']}>
      <p className={css['login-title']}>Log in</p>
      <form onSubmit={handleSumbit} autoComplete="off">
        <div className={css['user-box']}>
          <input required name="email" type="text" />
          <label>Email</label>
        </div>
        <div className={css['user-box']}>
          <input required name="password" type="password" />
          <label>Password</label>
        </div>

        <button className={css['btn']}>Log in</button>
      </form>
      <p className={css['navigate']}>
        Don't have an account?{' '}
        <NavLink to={'/register'} className={css['signup-link']}>
          Sign up!
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
