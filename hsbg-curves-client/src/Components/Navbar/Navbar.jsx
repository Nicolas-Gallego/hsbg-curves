import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  console.log(window.location.pathname);

  const [homeActive, setHomeActive] = useState(false);
  const [curvesActive, setCurvesActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/home') {
      setHomeActive(true);
    } else if (window.location.pathname === '/curves') {
      setCurvesActive(true);
      setHomeActive(false);
    }
  }, []);
  return (
    <div className={styles.navbar}>
      <NavLink to="/home" className={styles.homeLink}>
        <div className={styles.leftNav}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
          <h1 className={styles.mainTitle}>
            <i>HSBG Curves</i>
          </h1>
        </div>
      </NavLink>
      <div className={styles.righttNav}>
        <NavLink to="/home">
          <button
            className={homeActive ? styles.active : styles.navButton}
            type="submit"
          >
            Home
          </button>
        </NavLink>
        <NavLink to="/curves">
          <button
            className={curvesActive ? styles.active : styles.navButton}
            type="submit"
          >
            Curves
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
