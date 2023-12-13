"use client"

import styles from "./FilterComponents.module.css";
import Slider from '@mui/material/Slider';
import { useState } from "react";
import {useAppDispatch, useAppSelector} from "@/app/store/store";
import {setPeriod} from "@/app/store/slices/filters.slice";

const minDistance = 1;

const PeriodModule = () => {
  const period = useAppSelector((state) => state.filters.period);
  const dispatch = useAppDispatch();

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      const val = [Math.min(newValue[0], period[1] - minDistance), period[1]];
      dispatch(setPeriod(val));
    } else {
      const val = [period[0], Math.max(newValue[1], period[0] + minDistance)];
      dispatch(setPeriod(val));
    }
  };

  return (
    <div className={styles.periodWrapper}>
      <div className={styles.title}>Період</div>
      <div className={styles.dateWrapper}>
        <div className={styles.dateItem}>{period[0]}</div>
        <div className={styles.dateItem}>{period[1]}</div>
      </div>
      <Slider
        min={1980}
        max={2024}
        className="period-controller"
        getAriaLabel={() => 'Minimum distance'}
        value={period}
        onChange={handleChange1}
        disableSwap
      />
    </div>
  )
};

export default PeriodModule;
