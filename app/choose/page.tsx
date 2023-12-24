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
  const [renderData, setRenderData] = useState<ISectionItem[]>([]);
  const [api, setApi] = useState({
    setAllowScrolling: (val: boolean) => {},
    reBuild() {}
  });

  const { data, isLoading } = useGetFilmsListQuery({
    mainFilter: 'popular',
    queries: {
      language: UA,
      page: page,
    }
  });

  const setPageHandler = () => {
    setPage((prevState: number) => prevState + 1);

    setTimeout(() => {
      api?.reBuild();
    }, 500);
  }

  useEffect(() => {
    if (!currentId && data?.results?.length) {
      const shortArr = data?.results?.slice(0, 10);
      setRenderData(shortArr);
    }

    if (currentId && data?.results?.length) {
      const currentIndex = data?.results.findIndex((item: any) => item.id === currentId);

      if (currentIndex === data.results.length - 5) {
        setPageHandler();
      }

      if (currentIndex < 5) {
        setRenderData(data?.results?.slice(0, 10));
      } else {
        setRenderData(data?.results?.slice(currentIndex - 4, currentIndex + 5));
      }
    }
  }, [data, currentId]);

  useEffect(() => {
    setLikesTooltip(localStorage.getItem('likesTooltip'));
  }, []);

  return !isLoading && renderData.length && (
    <main className={styles.mainWrapper} id={'main'}>
      <ReactFullpage
        credits={{}}
        licenseKey = {process.env.NEXT_PUBLIC_FULL_PAGE_API_KEY}
        scrollingSpeed = {700}
        scrollBar={false}
        anchors={data.results.map((film: ISectionItem) => `${film.id}_${film.backdrop_path}`)}
        afterLoad={(_, index) => {
          setCurrentId(renderData[index.index]?.id || 0);

          let timeout: any;
          api?.setAllowScrolling(false);

          timeout = setTimeout(() => {
            api.setAllowScrolling(true);
            clearTimeout(timeout);
          }, 1000);
        }}
        render={({state, fullpageApi}) => {
          setApi(fullpageApi);

          return (
            <ReactFullpage.Wrapper>
              {renderData.map((item: ISectionItem) => {
                return  (
                  <div className={`${styles.section} section`} key={`${item.id}`} id={`${item.id}`}>
                    <div className={styles.item}>
                      {currentId === item.id && (
                        <SectionItem item={item} currentId={currentId} api={fullpageApi} />
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
