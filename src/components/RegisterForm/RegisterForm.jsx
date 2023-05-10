import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Register.module.css';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css['login-box']}>
      <p className={css['login-title']}>Sing up</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={css['user-box']}>
          <input required name="name" type="text" />
          <label>Name</label>
        </div>
        <div className={css['user-box']}>
          <input required name="email" type="text" />
          <label>Email</label>
        </div>
        <div className={css['user-box']}>
          <input required name="password" type="password" />
          <label>Password</label>
        </div>
        <button className={css['btn']}>Sign up!</button>
      </form>
      <p className={css['navigate']}>
        Don't have an account?{' '}
        <NavLink to={'/login'} className={css['signup-link']}>
          Log in
        </NavLink>
      </p>
    </div>
  );
};
