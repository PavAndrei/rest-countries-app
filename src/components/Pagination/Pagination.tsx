import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";

import { setCurrentPage } from "../../store/slices/sortSlice";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.sort);
  const { countries } = useSelector((state) => state.countries);

  const totalPage = Math.ceil(countries.length / itemsPerPage);

  if (totalPage > 1) {
    return (
      <ul className={styles.paginationList}>
        {[...Array(totalPage)].map((_, index) => (
          <li
            key={index}
            className={
              index + 1 === currentPage
                ? styles.paginationItemActive
                : styles.paginationItem
            }
            onClick={() => dispatch(setCurrentPage(index + 1))}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    );
  }
};
