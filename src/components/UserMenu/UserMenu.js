import { selectUserName } from 'redux/auth/selectors';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const navigate = useNavigate();

  const handleClick = e => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div className={css.container}>
      <img
        className={css.img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Ukraine_%281991%E2%80%931992%29.svg/220px-Flag_of_Ukraine_%281991%E2%80%931992%29.svg.png"
      ></img>
      <p>Hello {name}</p>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};
