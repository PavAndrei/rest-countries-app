import { FC, ReactNode } from "react";
import { Container } from "../Container/Container";
import styles from "./styles.module.css";

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.mainInner}>{children}</div>
      </Container>
    </div>
  );
};
