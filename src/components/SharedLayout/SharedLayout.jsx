import { Suspense } from 'react';
// import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import css from 'components/SharedLayout/SharedLayout.module.css';

// const StyledLink = styled(NavLink)`
//   &.active {
//     color: red;
//   }
// `;

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navLink} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>

        {/* <nav>
          <StyledLink className={css.navLink} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.navLink} to="/movies">
            Movies
          </StyledLink>
        </nav> */}
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default SharedLayout;
