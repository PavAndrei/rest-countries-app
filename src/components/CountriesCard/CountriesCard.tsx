import { FC } from "react";

import styles from "./styles.module.css";

export const CountriesCard: FC = ({
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
          <li className={styles.cardInfoItem}>Population: {population}</li>
          <li className={styles.cardInfoItem}>Region: {region}</li>
          <li className={styles.cardInfoItem}>Capital: {capital}</li>
        </ul>
      </div>
    </li>
  );
};
