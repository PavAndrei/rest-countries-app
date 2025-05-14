import { FC } from "react";

import { REGIONS } from "../../constants/regions";

import styles from "./styles.module.css";

interface RegionListProps {
  selectedRegion: string;
  selectRegion: (region: string) => void;
}

export const RegionList: FC<RegionListProps> = ({
  selectedRegion,
  selectRegion,
}) => {
  return (
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
  );
};
