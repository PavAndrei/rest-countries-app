import { useEffect, useRef, useState } from "react";
import { Container } from "../components/Container/Container";
import { CountriesList } from "../components/CountriesList/CountriesList";
import { FiltersBar } from "../components/FiltersBar/FiltersBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/slices/countriesSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  setCurrentPage,
  setKeywords,
  setRegion,
} from "../store/slices/sortSlice";
import { Pagination } from "../components/Pagination/Pagination";

export const MainPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isMounted = useRef<boolean>(false);

  const [isInitialized, setIsInitialized] = useState(false);

  const { region, keywords, currentPage } = useSelector((state) => state.sort);

  const dispatchCountriesData = (url) => {
    dispatch(
      fetchCountries({
        url: url,
        region: region,
        keywords: keywords,
      })
    );
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const query = new URLSearchParams();

    if (region) query.set("region", region);
    if (keywords) query.set("keywords", keywords);
    if (currentPage) query.set("page", String(currentPage));

    navigate(`/?${query.toString()}`);
  }, [region, keywords, currentPage]);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    if (params.region) {
      dispatch(setRegion(params.region));
    }
    if (params.keywords) {
      dispatch(setKeywords(params.keywords));
    }
    if (params.page) {
      dispatch(setCurrentPage(Number(params.page)));
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      dispatchCountriesData("/data/data.json");
    }
  }, [region, keywords, isInitialized]);

  return (
    <>
      <FiltersBar />
      <CountriesList />
      <Pagination />
    </>
  );
};
