"use client"

import styles from "./Choose.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import {useEffect, useState} from "react";
import { data } from "@/app/src/constants/structure";
import ChooseInfoBlock from "@/app/src/components/choose/ChooseInfoBlock";
import ChooseFooter from "@/app/src/components/choose/ChooseFooter";
import SectionItem from "@/app/src/components/choose/SectionItem";
import Tooltip from "@/app/src/components/shared/Tooltip";
import {Portal} from "@mui/base/Portal";

const Choose = () => {
  const [currentId, setCurrentId] = useState<number>(0);
  const [likesTooltip, setLikesTooltip] = useState<string | null>('');

  useEffect(() => {
    setLikesTooltip(localStorage.getItem('likesTooltip'));
  }, []);

  return (
    <main className={styles.mainWrapper} id={'main'}>
      <ReactFullpage
        credits={{}}
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {300}
        scrollBar={false}
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
                        <SectionItem item={item} currentId={currentId} />
                        <ChooseInfoBlock />
                      </div>
                      <ChooseFooter />
                    </div>
                  </div>
                )
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Portal container={() => document.getElementById('likes')}>
        {!likesTooltip && <Tooltip setLikesTooltip={setLikesTooltip} />}
      </Portal>
    </main>
  )
};

export default Choose;
