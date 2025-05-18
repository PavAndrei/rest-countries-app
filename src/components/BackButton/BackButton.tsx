import { useNavigate } from "react-router-dom";

import { LuMoveLeft } from "react-icons/lu";

import styles from "./styles.module.css";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      <LuMoveLeft color="var(--dark-mode-text)" fontSize={32} />
      <span>Back</span>
    </button>
  );
};
