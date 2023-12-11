"use client"

import styles from "./InfoBlock.module.css";
import ButtonIcon from "@/app/src/components/icons/ButtonIcon";
import Saved from "@/app/src/components/icons/Saved";
import {useState} from "react";
import AboutBlock from "@/app/src/components/choose/AboutBlock";

const ChooseFooter = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverSavedButton, setHoverSavedButton] = useState(false);

  return (
    <div className={styles.footerContent}>
      <button
        className={styles.footerContentButton}
        onMouseLeave={() => setHoverButton(false)}
        onMouseEnter={() => setHoverButton(true)}
      >
        <ButtonIcon stroke={hoverButton} />
        <span>Більше</span>
      </button>
      <AboutBlock />
      <div
        className={styles.footerContentSavedButton}
        onMouseLeave={() => setHoverSavedButton(false)}
        onMouseEnter={() => setHoverSavedButton(true)}
      >
        <Saved stroke={hoverSavedButton} />
        <span>Зберегти</span>
      </div>
    </div>
  )
};

export default ChooseFooter;
