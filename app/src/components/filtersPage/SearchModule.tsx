"use client"

import styles from "./FilterComponents.module.css";
import Search from "@/app/src/components/icons/Search";
import { useState } from "react";

export const SearchModule = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.searchWrapper}>
      <Search/>
      <input
        type="string"
        placeholder="Пошук"
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
};
