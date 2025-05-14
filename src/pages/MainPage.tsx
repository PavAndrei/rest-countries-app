import { useEffect } from "react";
import { Container } from "../components/Container/Container";
import { CountriesList } from "../components/CountriesList/CountriesList";
import { FiltersBar } from "../components/FiltersBar/FiltersBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/slices/countriesSlice";

export const MainPage = () => {
  const dispatch = useDispatch();

  const { region, keywords } = useSelector((state) => state.sort);

  useEffect(() => {
    dispatch(
      fetchCountries({
        url: "/data/data.json",
        region: region,
        keywords: keywords,
      })
    );
  }, [region, keywords]);

  return (
    <div>
      <Container>
        <FiltersBar />
        <CountriesList />
      </Container>
    </div>
  );
};
