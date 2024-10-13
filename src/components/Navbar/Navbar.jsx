import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/" onClick={closeMenu}>
        Portfolio
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={toggleMenu}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={closeMenu}
        >
          <li>
            <HashLink smooth to="/#about">About</HashLink>  {/* Smooth scroll */}
          </li>
          <li>
            <HashLink smooth to="/#experience">Experience</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">Projects</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">Contact</HashLink>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>  {/* Blogs page link */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
