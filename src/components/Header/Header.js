import React from "react";
import styles from "./Header.module.css";

const Header = ({ submitFn }) => {
  return (
    <form className={styles.wrapper} onSubmit={submitFn}>
      <input className={styles.input} placeholder="Add your task" />
      <button type="submit" className={styles.headerButton}>
        Add
      </button>
    </form>
  );
};

export default Header;
