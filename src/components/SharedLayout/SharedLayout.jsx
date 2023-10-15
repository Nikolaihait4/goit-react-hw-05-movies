import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.navContainer}>
      <header className={css.headerContainer}>
        <NavLink
          className={({ isActive }) =>
            `${css['headerLink']} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css['headerLink']} ${isActive ? css.active : ''}`
          }
          to="/movies"
          activeClassName={css.active}
        >
          Movies
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
