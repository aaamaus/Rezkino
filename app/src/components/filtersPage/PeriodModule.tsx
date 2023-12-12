"use client"

import styles from "./FilterComponents.module.css";
import Slider from '@mui/material/Slider';
import { useState } from "react";

const minDistance = 1;

const PeriodModule = () => {
  const [value, setValue] = useState([1700, 2024])

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <div className={styles.periodWrapper}>
      <div className={styles.title}>Період</div>
      <div className={styles.dateWrapper}>
        <div className={styles.dateItem}>{value[0]}</div>
        <div className={styles.dateItem}>{value[1]}</div>
      </div>
      <Slider
        min={1700}
        max={2024}
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange1}
        disableSwap
      />
    </div>
  )
};

export default PeriodModule;
