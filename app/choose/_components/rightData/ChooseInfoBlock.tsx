"use client"

import styles from "../../_styles/InfoBlock.module.css";
import {infoBlockItems} from "@/app/src/constants/structure";
import InfoBlockIcons from "@/app/choose/_components/rightData/InfoBlockIcons";
import { useState } from "react";

interface IProps {
  voteCount: number
}

const ChooseInfoBlock = ({ voteCount }: IProps) => {
  const [hoveredItem, setHoveredItem] = useState('');

  const valueHandler = (path: string, def: any) => {
    if (path === 'likes') {
      return voteCount;
    }
    if (path === 'saved') {
      return Math.round(voteCount / 5);
    }
    if (path === 'share') {
      return Math.round(voteCount / 3);
    }

    return def;
  };

  return (
    <div className={styles.itemInfoBar}>
      {infoBlockItems.map((infoBlockItem, index) => {
        return (
          <div
            id={infoBlockItem.path}
            key={infoBlockItem.path}
            className={styles.infoBarItemWrapper}
            onMouseEnter={() => setHoveredItem(infoBlockItem.path)}
            onMouseLeave={() => setHoveredItem('')}
          >
            <InfoBlockIcons
              iconName={infoBlockItem.path}
              hoveredItem={hoveredItem}
            />
            <div>{valueHandler(infoBlockItem.path, infoBlockItem.number)}</div>
          </div>
        )
      })}
    </div>
  )
};

export default ChooseInfoBlock;
