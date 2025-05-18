import { FC } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../store/slices/sortSlice";

interface TitleProps {
  children: string;
}

export const Title: FC<TitleProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <Link to={"/"} onClick={() => dispatch(resetFilters())}>
      <h1 className={styles.title}>{children}</h1>
    </Link>
  );
};
