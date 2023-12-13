import styles from './Filters.module.css';
import { SearchModule } from "@/app/src/components/filtersPage/SearchModule";
import PeriodModule from "@/app/src/components/filtersPage/PeriodModule";
import GenresModule from "@/app/src/components/filtersPage/GenresModule";

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
