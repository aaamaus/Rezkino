"use client"

import styles from "./InfoBlock.module.css";
import {infoBlockItems} from "@/app/src/constants/structure";
import InfoBlockIcons from "@/app/src/components/choose/InfoBlockIcons";
import {useState} from "react";

const ChooseInfoBlock = () => {
  const [hoveredItem, setHoveredItem] = useState('');

  return (
    <div className={styles.itemInfoBar}>
      {infoBlockItems.map((infoBlockItem) => {
        return (
          <div
            key={infoBlockItem.path}
            className={styles.infoBarItemWrapper}
            onMouseEnter={() => setHoveredItem(infoBlockItem.path)}
            onMouseLeave={() => setHoveredItem('')}
          >
            <InfoBlockIcons
              iconName={infoBlockItem.path}
              hoveredItem={hoveredItem}
            />
            <div>{infoBlockItem.number}</div>
          </div>
        )
      })}
    </div>
  )
};

export default ChooseInfoBlock;
