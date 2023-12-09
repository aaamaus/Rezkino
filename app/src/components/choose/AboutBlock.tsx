import styles from "./InfoBlock.module.css";

const AboutBlock = () => {
  return (
    <div className={styles.footerContentData}>
      <div className={styles.footerContentDataYear}>2020</div>
      <div className={styles.footerContentDataCtr}>США</div>
      <div className={styles.footerContentDataNumber}>7/3 <span>IMDb</span></div>
    </div>
  )
};

export default AboutBlock;
