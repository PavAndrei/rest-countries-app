import { Container } from "../Container/Container";
import { FiltersByRegion } from "../FilterByRegion/FIltersByRegion";
import { Search } from "../Search/Search";
import styles from "./styles.module.css";

export const FiltersBar = () => {
  return (
    <div className={styles.filters}>
      <Container>
        <div className={styles.filtersInner}>
          <Search />
          <FiltersByRegion />
        </div>
      </Container>
    </div>
  );
};
