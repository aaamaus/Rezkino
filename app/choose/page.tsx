"use client"

import styles from "./_styles/Choose.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import {useEffect, useState} from "react";
import SectionItem from "@/app/choose/_components/section/SectionItem";
import Tooltip from "@/app/src/components/shared/Tooltip";
import {Portal} from "@mui/base/Portal";
import {useGetFilmsListQuery} from "@/app/store/api/filmAPI";
import {ISectionItem, ISectionItemProps} from "@/app/choose/_types/interfaces";
import {UA} from "@/app/src/constants/local";

const Choose = () => {
  const [currentId, setCurrentId] = useState<number>(0);
  const [likesTooltip, setLikesTooltip] = useState<string | null>('');

  const { data, isLoading } = useGetFilmsListQuery({
    language: UA,
    page: "1",
  });

  console.log(data, 'data')
  useEffect(() => {
    setLikesTooltip(localStorage.getItem('likesTooltip'));
  }, []);

  return !isLoading && (
    <main className={styles.mainWrapper} id={'main'}>
      <ReactFullpage
        credits={{}}
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {300}
        scrollBar={false}
        afterLoad={(_, index) => {
          setCurrentId(data.results[index.index].id)
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {data.results.map((item: ISectionItem) => {
                return  (
                  <div className={`${styles.section} section`} key={item.id} id={`${item.id}`}>
                    <div className={styles.item}><SectionItem item={item} currentId={currentId} /></div>
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
