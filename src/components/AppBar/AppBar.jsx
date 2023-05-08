import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectAuth } from 'redux/auth/selectors';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <div className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
