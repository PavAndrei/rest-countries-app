import { FC } from "react";

import { IoIosMoon } from "react-icons/io";
import styles from "./styles.module.css";

export const ThemeSwitcher: FC = () => {
  return (
    <div className={styles.themeSwitcher}>
      <IoIosMoon color="var(--dark-mode-text)" size="30px" />

      <div className={styles.text}>Dark Mode</div>
    </div>
  );
};
