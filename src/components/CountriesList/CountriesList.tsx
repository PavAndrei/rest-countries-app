import { FC, useEffect } from "react";
import { CountriesCard } from "../CountriesCard/CountriesCard";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/slices/countriesSlice";

export const CountriesList: FC = () => {
  const dispatch = useDispatch();

  const { countries, isLoading, error } = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    dispatch(
      fetchCountries({ url: "/data/data.json", region: "", keywords: "" })
    );
  }, []);

  console.log(countries);

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
