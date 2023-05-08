import { NavLink } from 'react-router-dom';
import css from '../AuthNav/Auth.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink className={css.button} to="/">
        <span className={css.span}>Home</span>
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.button} to="/contacts">
          <span className={css.span}>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};
