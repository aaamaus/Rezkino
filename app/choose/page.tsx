"use client"

import styles from "./Choose.module.css";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import Slider from '@mui/material/Slider';
import {data, infoBlockItems} from "@/app/src/constants/structure";
import InfoBlockIcons from "../src/components/choose/InfoBlockIcons";

const Choose = () => {
  const [currentId, setCurrentId] = useState(0);
  const [volume, setVolume] = useState<number | number[]>(50);
  const [hoveredItem, setHoveredItem] = useState('');
  const [volumeController, setVolumeController] = useState(false);

  return (
    <main className={styles.mainWrapper}>
      <ReactFullpage
        credits={{}}
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {500}
        afterLoad={(_, index) => {
          setCurrentId(data[index.index].id)
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {data.map((item) => {
                return  (
                  <div className={`${styles.section} section`} key={item.id} id={`${item.id}`}>
                    <div className={styles.item}>
                      <div className={styles.itemContent}>
                        <div
                          onMouseEnter={() => setVolumeController(true)}
                          onMouseLeave={() => setVolumeController(false)}
                          className={styles.imageWrapper}
                        >
                          <div className={styles.topPlaceHolder}/>
                          {currentId === item.id && <ReactPlayer
														controls={false}
														width={'100%'}
														height={'100%'}
														playing={currentId === item.id}
														loop={true}
														volume={volume as number / 100}
														url={item.url}
													/>}
                          <div className={styles.bottomPlaceHolder}/>
                          {volumeController && <div className={styles.sliderWrapper}>
														<Slider
															defaultValue={50}
															value={volume}
															orientation="vertical"
															onChange={(_, value) => setVolume(value)}
														/>
													</div>}
                        </div>
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
                      </div>
                      <div className={styles.footerContent}>
                        <div className={styles.footerContentButton}>Більше</div>
                        <div className={styles.footerContentData}>
                          <div className={styles.footerContentDataYear}>2020</div>
                          <div className={styles.footerContentDataCtr}>США</div>
                          <div className={styles.footerContentDataNumber}>7/3 <span>IMDb</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  )
};

export default Choose;
