import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";
import { CountryBox } from "../components/CountryBox/CountryBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "../store/slices/countriesSlice";

export const CountryPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { countries, isLoading, error } = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries({ url: "/data/data.json" }));
    }
  }, []);

  const currentCountry = countries.find((country) => id === country.alpha3Code);
  const neighbours = countries.filter((country) => {
    if (currentCountry.borders?.includes(country.alpha3Code)) {
      return country;
    }
  });

  return (
    <>
      <BackButton />
      {isLoading && <span>Loading...</span>}
      {error && <span>Error...</span>}
      {countries.length > 0 && (
        <CountryBox neighbours={neighbours} {...currentCountry} />
      )}
    </>
  );
};
