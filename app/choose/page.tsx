"use client"

import styles from "./Choose.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import { data } from "@/app/src/constants/structure";
import ChooseInfoBlock from "@/app/src/components/choose/ChooseInfoBlock";
import ChooseFooter from "@/app/src/components/choose/ChooseFooter";
import SectionItem from "@/app/src/components/choose/SectionItem";
import AboutBlock from "@/app/src/components/choose/AboutBlock";

const Choose = () => {
  const [currentId, setCurrentId] = useState(0);

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
                      <AboutBlock />
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
    </main>
  )
};

export default Choose;
