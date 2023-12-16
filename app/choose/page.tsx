"use client"

import styles from "./_styles/Choose.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import {useEffect, useState} from "react";
import SectionItem from "@/app/choose/_components/section/SectionItem";
import Tooltip from "@/app/src/components/shared/Tooltip";
import {Portal} from "@mui/base/Portal";
import {useGetFilmsListQuery} from "@/app/store/api/filmAPI";
import { ISectionItem } from "@/app/choose/_types/interfaces";
import {UA} from "@/app/src/constants/local";

const Choose = () => {
  const [currentId, setCurrentId] = useState<number>(0);
  const [likesTooltip, setLikesTooltip] = useState<string | null>('');
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetFilmsListQuery({
    mainFilter: 'popular',
    queries: {
      language: UA,
      page: page,
    }
  });

  const setPageHandler = () => {
    setPage((prevState: number) => prevState + 1)
  }

  useEffect(() => {
    setLikesTooltip(localStorage.getItem('likesTooltip'));
  }, []);

  return !isLoading && (
    <main className={styles.mainWrapper} id={'main'}>
      <ReactFullpage
        credits={{}}
        licenseKey = {process.env.NEXT_PUBLIC_FULL_PAGE_API_KEY}
        scrollingSpeed = {700}
        scrollBar={false}
        afterLoad={(_, index) => {
          setCurrentId(data.results[index.index].id)
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {data.results.map((item: ISectionItem, index: number) => {
                return  (
                  <div className={`${styles.section} section`} key={item.id} id={`${item.id}`}>
                    <div className={styles.item}>
                      {currentId === item.id && (
                        <SectionItem
                          item={item}
                          currentId={currentId}
                          countPageFlag={index === data.results.length - 2}
                          setPageHandler={setPageHandler}
                        />
                      )}
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
