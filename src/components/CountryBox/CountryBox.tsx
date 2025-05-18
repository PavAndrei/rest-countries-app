import styles from "./styles.module.css";

export const CountryBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="https://flagcdn.com/w320/be.png"
          alt="Belgium"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>Belgium</h3>
        <div className={styles.dataGroup}>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              Native Name:
              <span className={styles.infoItemValue}>België</span>
            </li>
            <li className={styles.infoItem}>
              Population:
              <span className={styles.infoItemValue}>11555997</span>
            </li>
            <li className={styles.infoItem}>
              Region:
              <span className={styles.infoItemValue}>Europe</span>
            </li>
            <li className={styles.infoItem}>
              Sub Region:
              <span className={styles.infoItemValue}>Western Europe</span>
            </li>
            <li className={styles.infoItem}>
              Capital:
              <span className={styles.infoItemValue}>Brucelles</span>
            </li>
          </ul>
          <ul className={styles.dataList}>
            <li className={styles.infoItem}>
              Top Level Domain:
              <ul className={styles.infoItemList}>
                <li className={styles.infoItemValue}>Euro</li>
              </ul>
            </li>
            <li className={styles.infoItem}>
              Currencies:
              <ul className={styles.infoItemList}>
                <li className={styles.infoItemValue}>Euro</li>
              </ul>
            </li>
            <li className={styles.infoItem}>
              Languages:
              <ul className={styles.infoItemList}>
                <li className={styles.infoItemValue}>Dutch</li>
                <li className={styles.infoItemValue}>French</li>
                <li className={styles.infoItemValue}>German</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.borders}>
          <span className={styles.bordersText}>Border Countries: </span>
          <ul className={styles.bordersList}>
            <li className={styles.bordersItem}>
              <button className={styles.borderButton}>France</button>
            </li>
            <li className={styles.bordersItem}>
              <button className={styles.borderButton}>Germany</button>
            </li>
            <li className={styles.bordersItem}>
              <button className={styles.borderButton}>Netherlands</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
