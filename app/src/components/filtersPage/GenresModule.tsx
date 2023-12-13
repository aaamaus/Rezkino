"use client"

import { genresData } from "@/app/src/constants/structure";
import {useAppDispatch, useAppSelector} from "@/app/store/store";
import styles from "./FilterComponents.module.css";
import {setGenres} from "@/app/store/slices/filters.slice";

const GenresModule = () => {
  const genres = useAppSelector((state) => state.filters.genres);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.genresWrapper}>
      <div className={styles.title}>Жанр</div>
      <div className={styles.genresListWrapper}>{genresData.map((item) => {
          const activeItem = genres.findIndex((subItem) => subItem === item.id);

          return (
            <div
              key={item.id}
              onClick={() => dispatch(setGenres(item.id))}
              className={`${styles.genresItem} ${activeItem !== -1 ? styles.activeGenre : ''}`}
            >
              {item.name}
            </div>
          )
        })
      }</div>
    </div>
  )
};

export default GenresModule;
