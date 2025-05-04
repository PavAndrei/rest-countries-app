import { FC } from "react";

import { IoIosMoon } from "react-icons/io";
import styles from "./styles.module.css";

export const ThemeSwitcher: FC = () => {
  return (
    <div className={styles.themeSwitcher}>
      <span className={styles.icon}>
        <IoIosMoon color="var(--dark-mode-text)" size="22px" />
      </span>
      <div className={styles.text}>Dark Mode</div>
    </div>
  );
};
