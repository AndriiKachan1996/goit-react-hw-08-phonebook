// import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';

import css from './Layout.module.css';
import { MiddleLoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main>
        <Suspense fallback={<MiddleLoaderSpiner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
