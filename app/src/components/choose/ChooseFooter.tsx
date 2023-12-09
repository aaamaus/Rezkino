import styles from "./InfoBlock.module.css";

const ChooseFooter = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.footerContentButton}>Більше</div>
      <div className={styles.footerContentData}>
        <div className={styles.footerContentDataYear}>2020</div>
        <div className={styles.footerContentDataCtr}>США</div>
        <div className={styles.footerContentDataNumber}>7/3 <span>IMDb</span></div>
      </div>
    </div>
  )
};

export default ChooseFooter;
