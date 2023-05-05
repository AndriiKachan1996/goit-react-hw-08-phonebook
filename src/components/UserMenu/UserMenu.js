import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './UserMenu.module.css';

import { logout } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    dispatch(logout());

    if (isLoggedIn) navigate('/');
  };

  return (
    <div className={css.container}>
      <img
        className={css.img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Ukraine_%281991%E2%80%931992%29.svg/220px-Flag_of_Ukraine_%281991%E2%80%931992%29.svg.png"
      ></img>
      <p>Hello {name}</p>
      <button type="button" onClick={handleClickLogOut}>
        Log out
      </button>
    </div>
  );
};
