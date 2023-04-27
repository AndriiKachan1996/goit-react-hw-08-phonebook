import { NavLink } from 'react-router-dom';
import css from './Auth.module.css';
import { Container } from '@mui/material';

export const AuthNav = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={css.button} to="/register">
        <span className={css.span}>Sing up</span>
      </NavLink>
      <NavLink className={css.button} to="/login">
        <span className={css.span}>Log In</span>
      </NavLink>
    </nav>
  );
};
