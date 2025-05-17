import { FC } from "react";

import styles from "./styles.module.css";

interface CountriesCardProps {
  name: string;
  flags: { png: string; svg: string };
  population: number;
  region: string;
  capital: string;
}

export const CountriesCard: FC<CountriesCardProps> = ({
  name,
  flags,
  population,
  region,
  capital,
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={flags.png} alt={name} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{name}</h3>
        <ul className={styles.cardInfo}>
          <li className={styles.cardInfoItem}>
            Population: <span>{population}</span>
          </li>
          <li className={styles.cardInfoItem}>
            Region: <span>{region}</span>
          </li>
          <li className={styles.cardInfoItem}>
            Capital: <span>{capital}</span>
          </li>
        </ul>
      </div>
    </li>
  );
};
