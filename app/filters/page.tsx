import styles from './_styles/Filters.module.css';
import { SearchModule } from "@/app/filters/_components/SearchModule";
import PeriodModule from "@/app/filters/_components/PeriodModule";
import GenresModule from "@/app/filters/_components/GenresModule";

const Filter = () => {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <SearchModule />
        <PeriodModule />
        <GenresModule />
      </div>
    </main>
  )
};

export default Filter;
