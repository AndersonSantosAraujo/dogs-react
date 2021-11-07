import styles from "./Header.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.footer}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
