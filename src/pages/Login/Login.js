import css from './Login.module.css';
import { NavLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className={css['login-box']}>
      <p className={css['login-title']}>Login</p>
      <form>
        <div className={css['user-box']}>
          <input required name="email" type="text" />
          <label>Email</label>
        </div>
        <div className={css['user-box']}>
          <input required name="password" type="password" />
          <label>Password</label>
        </div>
        <button type="submit" className={css['submit-button']}>
          Submit
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
