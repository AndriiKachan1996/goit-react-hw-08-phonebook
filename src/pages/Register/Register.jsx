import css from './Register.module.css';
import { NavLink } from 'react-router-dom';

export const Register = () => {
  return (
    <div className={css['login-box']}>
      <p className={css['login-title']}>Sing up</p>
      <form>
        <div className={css['user-box']}>
          <input required name="email" type="text" />
          <label>Name</label>
        </div>
        <div className={css['user-box']}>
          <input required name="password" type="password" />
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
        Do you have an account?{' '}
        <NavLink to={'/login'} className={css['signup-link']}>
          Login
        </NavLink>
      </p>
    </div>
  );
};
