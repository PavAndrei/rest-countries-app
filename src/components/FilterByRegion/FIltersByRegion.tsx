import { useState } from "react";

import styles from "./styles.module.css";

import { MdOutlineArrowForwardIos } from "react-icons/md";

import { REGIONS } from "../../constants/regions";

export const FiltersByRegion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>();

  const toggleRegionList = () => {
    setIsOpen((prev) => !prev);
  };

  const selectRegion = (region: string) => {
    if (region !== selectedRegion) {
      setSelectedRegion(region);
      setIsOpen(false);
    }
  };

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
