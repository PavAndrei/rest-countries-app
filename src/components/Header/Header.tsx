import { FC } from "react";
import { Container } from "../Container/Container";
import styles from "./styles.module.css";
import { Title } from "../Title/Title";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Title>Where in the world?</Title>
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};
