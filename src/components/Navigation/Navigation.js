import { NavLink } from 'react-router-dom';
import css from '../AuthNav/Auth.module.css';

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={css.button} to="/">
        <span className={css.span}>Home</span>
      </NavLink>
      <NavLink className={css.button} to="/contacts">
        <span className={css.span}>Tasks</span>
      </NavLink>
    </nav>
  );
};
