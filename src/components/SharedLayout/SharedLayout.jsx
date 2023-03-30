import { Outlet, NavLink } from 'react-router-dom';
import css from 'components/SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default SharedLayout;
