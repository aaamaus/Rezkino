"use client"

import styles from "../../_styles/InfoBlock.module.css";
import ButtonIcon from "@/app/src/components/icons/ButtonIcon";
import Saved from "@/app/src/components/icons/Saved";
import {useState} from "react";
import AboutBlock from "@/app/choose/_components/bottomData/AboutBlock";

interface IProps {
  voteAverage: number,
  genres: number[],
  date: string
}

const ChooseFooter = ({ voteAverage, genres, date }: IProps) => {
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div className={styles.footerContent}>
      <AboutBlock
        voteAverage={voteAverage}
        genres={genres}
        date={date}
      />
      <button
        className={styles.footerContentButton}
        onMouseLeave={() => setHoverButton(false)}
        onMouseEnter={() => setHoverButton(true)}
      >
        <ButtonIcon stroke={hoverButton}/>
        <span>Більше</span>
      </button>
    </div>
  )
};

export default ChooseFooter;
