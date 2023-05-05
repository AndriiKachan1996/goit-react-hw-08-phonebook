import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import css from './Login.module.css';
import { login } from 'redux/auth/operations';
// import { logIn } from 'redux/auth/operations';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSumbit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate('/contacts');
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
        <button type="submit" className={css['button']}>
          Log in
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <NavLink to={'/register'} className={css['signup-link']}>
          Sign up!
        </NavLink>
      </p>
    </div>
  );
};
