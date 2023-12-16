import styles from "../../_styles/InfoBlock.module.css";
import {genresData} from "@/app/src/constants/structure";

interface IProps {
  voteAverage: number,
  genres: number[],
  date: string
}

const AboutBlock = ({ voteAverage, genres, date }: IProps) => {
  const currentGenre = genresData.find(
    (item) => item.id === genres[0]
  );

  return (
    <div className={styles.footerContentData}>
      <div className={styles.footerContentDataYear}>
        {date ? date.split('-')[0] : '2023'}
      </div>
      <div className={styles.footerContentDataCtr}>{currentGenre ? currentGenre.name : 'Біографія'}</div>
      <div className={styles.footerContentDataNumber}>
        {voteAverage ? voteAverage.toFixed(1) : 9.1} IMDb
      </div>
    </div>
  )
};

export default AboutBlock;
