import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from './UserMenu.module.css';
import { logout } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const contact = useSelector(selectUser);
  const { name } = useSelector(selectUser);
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    dispatch(logout());

    if (isLoggedIn) navigate('/');
  };

  return (
    <div className={css.container}>
      <div className={css.text}>
        <p className={css.welcomeBack}>
          Welcomeback <span className={css.name}>{name}</span>
        </p>
      </div>
      <button onClick={handleClickLogOut} className={css.button}>
        <span className={css.span}>Log Out ➜</span>
      </button>
    </div>
  );
};
