import { FC } from "react";
import { CountriesCard } from "../CountriesCard/CountriesCard";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";

export const CountriesList: FC = () => {
  const { countries, isLoading, error } = useSelector(
    (state) => state.countries
  );

  if (isLoading) {
    return <div className="loading">Loading... Please wait...</div>;
  }

  if (error) {
    return <div className="error">Something went wrong...</div>;
  }

  return (
    <ul className={styles.list}>
      {countries &&
        countries.map((country) => {
          return <CountriesCard key={country.name} {...country} />;
        })}
    </ul>
  );
};
