import styles from "./Choose.module.css";
import mockPreview from './../../public/images/mockPreview.png';
import Image from 'next/image'

const Choose = () => {
  return (
    <main className={styles.page}>
      <div className={styles.scrollContainer}>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.imageWrapper}>
              <Image src={mockPreview} alt={"preview"} />
            </div>
            <div className={styles.itemInfoBar}></div>
          </div>
          <div className={styles.footerContent}></div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.imageWrapper}>
              <Image src={mockPreview} alt={"preview"} />
            </div>
            <div className={styles.itemInfoBar}></div>
          </div>
          <div className={styles.footerContent}></div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.imageWrapper}>
              <Image src={mockPreview} alt={"preview"} />
            </div>
            <div className={styles.itemInfoBar}></div>
          </div>
          <div className={styles.footerContent}></div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.imageWrapper}>
              <Image src={mockPreview} alt={"preview"} />
            </div>
            <div className={styles.itemInfoBar}></div>
          </div>
          <div className={styles.footerContent}></div>
        </div>
      </div>
    </main>
  )
};

export default Choose;
