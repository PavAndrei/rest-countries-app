import { FiltersByRegion } from "../FilterByRegion/FIltersByRegion";
import { Search } from "../Search/Search";

import styles from "./styles.module.css";

export const FiltersBar = () => {
  return (
    <div className={styles.filters}>
      <Search />
      <FiltersByRegion />
    </div>
  );
};
