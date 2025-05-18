import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";

export const CountryBox = ({
  name,
  flags,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  neighbours,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log(neighbours);
  return (
    <div className={styles.box}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={flags.png} alt={name} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.dataGroup}>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              Native Name:
              <span className={styles.infoItemValue}>{nativeName}</span>
            </li>
            <li className={styles.infoItem}>
              Population:
              <span className={styles.infoItemValue}>{population}</span>
            </li>
            <li className={styles.infoItem}>
              Region:
              <span className={styles.infoItemValue}>{region}</span>
            </li>
            <li className={styles.infoItem}>
              Sub Region:
              <span className={styles.infoItemValue}>{subregion}</span>
            </li>
            <li className={styles.infoItem}>
              Capital:
              <span className={styles.infoItemValue}>{capital}</span>
            </li>
          </ul>
          <ul className={styles.dataList}>
            <li className={styles.infoItem}>
              Top Level Domain:
              <ul className={styles.infoItemList}>
                {topLevelDomain.map((domain) => (
                  <li key={domain} className={styles.infoItemValue}>
                    {domain}
                  </li>
                ))}
              </ul>
            </li>
            <li className={styles.infoItem}>
              Currencies:
              <ul className={styles.infoItemList}>
                {currencies.map((currency) => (
                  <li key={currency.code} className={styles.infoItemValue}>
                    {currency.name}
                  </li>
                ))}
              </ul>
            </li>
            <li className={styles.infoItem}>
              Languages:
              <ul className={styles.infoItemList}>
                {languages.map((language) => (
                  <li key={language.name} className={styles.infoItemValue}>
                    {language.name}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        {neighbours.length !== 0 && (
          <div className={styles.borders}>
            <span className={styles.bordersText}>Border Countries: </span>
            <ul className={styles.bordersList}>
              {neighbours.map((neighbour) => (
                <Link
                  to={`/country/${neighbour.alpha3Code}`}
                  key={neighbour.name}
                >
                  <li className={styles.bordersItem}>
                    <button className={styles.borderButton}>
                      {neighbour.name}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
