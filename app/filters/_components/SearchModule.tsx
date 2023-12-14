"use client"

import styles from "../_styles/FilterComponents.module.css";
import Search from "@/app/src/components/icons/Search";
import { useState } from "react";
import {setSearch} from "@/app/store/slices/filters.slice";
import {useAppDispatch} from "@/app/store/store";

export const SearchModule = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div className={styles.searchWrapper}>
      <Search/>
      <input
        type="string"
        placeholder="Пошук"
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => {
          dispatch(setSearch(e.target.value))
          setSearchValue(e.target.value);
        }}
      />
    </div>
  )
};
