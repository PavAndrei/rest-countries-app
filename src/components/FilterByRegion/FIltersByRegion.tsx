import { useState } from "react";

import { MdOutlineArrowForwardIos } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../../store/slices/sortSlice";

import styles from "./styles.module.css";
import { RegionList } from "../RegionsList/RegionList";
import { useUpdateParams } from "../../hooks/useUpdateParams";

export const FiltersByRegion = () => {
  const dispatch = useDispatch();

  const { updateParam } = useUpdateParams();

  const { region: selectedRegion } = useSelector((state) => state.sort);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleRegionList = () => {
    setIsOpen((prev) => !prev);
  };

  const selectRegion = (region: string) => {
    if (region !== selectedRegion) {
      dispatch(setRegion(region));
    }

    setIsOpen(false);
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
        <RegionList
          selectedRegion={selectedRegion}
          selectRegion={selectRegion}
        />
      )}
    </div>
  );
};
