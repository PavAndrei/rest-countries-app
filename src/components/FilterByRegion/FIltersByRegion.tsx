import { useEffect, useState } from "react";

import { MdOutlineArrowForwardIos } from "react-icons/md";

import { REGIONS } from "../../constants/regions";

import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../../store/slices/sortSlice";
import { fetchCountries } from "../../store/slices/countriesSlice";

import styles from "./styles.module.css";

export const FiltersByRegion = () => {
  const dispatch = useDispatch();

  const { region: selectedRegion } = useSelector((state) => state.sort);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleRegionList = () => {
    setIsOpen((prev) => !prev);
  };

  const selectRegion = (region: string) => {
    dispatch(setRegion(region));
    // setIsOpen(false);
  };

  useEffect(() => {
    dispatch(
      fetchCountries({
        url: "/data/data.json",
        region: selectedRegion,
        keywords: "",
      })
    );
  }, [selectedRegion]);

  return (
    <div className={styles.filter}>
      <div className={styles.filterLabel} onClick={toggleRegionList}>
        <span>Filter by Region</span>
        <MdOutlineArrowForwardIos
          className={isOpen ? styles.rotatedIcon : styles.icon}
        />
      </div>
      {isOpen && (
        <ul className={styles.filtersList}>
          {REGIONS.map((region, i) => (
            <li
              key={i}
              className={
                region === selectedRegion
                  ? styles.filterItemActive
                  : styles.filterItem
              }
              onClick={() => selectRegion(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
