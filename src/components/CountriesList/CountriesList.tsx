import { FC } from "react";

import { CountriesCard } from "../CountriesCard/CountriesCard";

import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const CountriesList: FC = () => {
  const { countries, isLoading, error } = useSelector(
    (state) => state.countries
  );

  const { currentPage, itemsPerPage } = useSelector((state) => state.sort);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginated = countries.slice(startIndex, startIndex + itemsPerPage);

  if (isLoading) {
    return <div className="loading">Loading... Please wait...</div>;
  }

  if (error) {
    return <div className="error">Something went wrong...</div>;
  }

  return (
    <ul className={styles.list}>
      {countries &&
        paginated.map((country) => {
          return (
            <Link to={`/country/${country.alpha3Code}`} key={country.name}>
              <CountriesCard {...country} />
            </Link>
          );
        })}
    </ul>
  );
};
