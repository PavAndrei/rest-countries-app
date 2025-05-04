import { FC } from "react";
import styles from "./styles.module.css";
import { IoMdSearch } from "react-icons/io";

export const Search: FC = () => {
  return (
    <label className={styles.searchWrapper}>
      <span className={styles.searchIcon}>
        <IoMdSearch color="var(--dark-mode-text)" fontSize="20px" />
      </span>
      <input
        className={styles.search}
        type="text"
        placeholder="Search for a country..."
      />
    </label>
  );
};
