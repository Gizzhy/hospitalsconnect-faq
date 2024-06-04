import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles/Navbar.module.scss";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <nav className={styles.nav1}>
        <div className={styles.nav2}>
          <div className={styles.nav2a}>
            <img
              src={logo}
              className={styles.navlogo}
              alt="Hospitals connect"
            />
          </div>
          <div className={styles.nav2b}>
            <ul className={styles.navlist}>
              <li
                className={`${styles.navLink} ${styles.navItem} ${
                  activeLink === "/" ? styles.active : ""
                }`}
              >
                <Link to="/">Home</Link>
              </li>

              <li
                className={`${styles.navLink} ${styles.navItem} ${
                  activeLink === "/about" ? styles.active : ""
                }`}
              >
                <Link to="/about">About Us</Link>
              </li>

              <li
                className={`${styles.navLink} ${styles.navItem} ${
                  activeLink === "/service" ? styles.active : ""
                }`}
              >
                <Link to="/service">Service</Link>
              </li>
              <li
                className={`${styles.navLink} ${styles.navItem} ${
                  activeLink === "/product" ? styles.active : ""
                }`}
              >
                <Link to="/product">Products</Link>
              </li>
              <li
                className={`${styles.navLink} ${styles.navItem} ${
                  activeLink === "/faq" ? styles.active : ""
                }`}
              >
                <Link to="/faq">Faq</Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav2c}>
            <a href="/#">
              <button className={styles.navButton}>Get started</button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
