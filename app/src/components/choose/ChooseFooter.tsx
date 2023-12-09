"use client"

import styles from "./InfoBlock.module.css";
import ButtonIcon from "@/app/src/components/icons/ButtonIcon";
import Saved from "@/app/src/components/icons/Saved";
import {useState} from "react";

const ChooseFooter = () => {
  const [hoverButton, setHoverButton] = useState(false);

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
      <div className={styles.footerContentSavedButton}>
        <Saved />
        <span>До обраних</span>
      </div>
    </div>
  )
};

export default ChooseFooter;
