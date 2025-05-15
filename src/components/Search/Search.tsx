import { FC, useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setKeywords } from "../../store/slices/sortSlice";

import styles from "./styles.module.css";

export const Search: FC = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    const timeout = setTimeout(() => {
      dispatch(setKeywords(searchValue));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchValue, dispatch]);

  return (
    <label className={styles.searchWrapper}>
      <span className={styles.searchIcon}>
        <IoMdSearch color="var(--dark-mode-text)" fontSize="20px" />
      </span>
      <input
        className={styles.search}
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </label>
  );
};
