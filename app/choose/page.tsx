"use client"

import styles from "./Choose.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import mockPreview from './../../public/images/mockPreview.png';
import Image from 'next/image'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import 'swiper/css';

const Choose = () => {
  return (
    <main>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className={styles.mySwiper}
        speed={500}
      >
        <SwiperSlide>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.imageWrapper}>
                <ReactPlayer
                  controls={true}
                  width={'100%'}
                  height={'100%'}
                  playing={true}
                  url='https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4'
                />
                {/*<Image className={styles.img} src={mockPreview} alt={"preview"} />*/}
              </div>
              <div className={styles.itemInfoBar}></div>
            </div>
            <div className={styles.footerContent}>1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.imageWrapper}>
                <ReactPlayer
                  controls={false}
                  width={'100%'}
                  height={'100%'}
                  playing={true}

                  url='https://www.youtube.com/watch?v=DtR76pz517E'
                />
                {/*<Image className={styles.img} src={mockPreview} alt={"preview"} />*/}
              </div>
              <div className={styles.itemInfoBar}></div>
            </div>
            <div className={styles.footerContent}>2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.imageWrapper}>
                <Image className={styles.img} src={mockPreview} alt={"preview"} />
              </div>
              <div className={styles.itemInfoBar}></div>
            </div>
            <div className={styles.footerContent}>3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.imageWrapper}>
                <Image className={styles.img} src={mockPreview} alt={"preview"} />
              </div>
              <div className={styles.itemInfoBar}></div>
            </div>
            <div className={styles.footerContent}>4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.imageWrapper}>
                <Image className={styles.img} src={mockPreview} alt={"preview"} />
              </div>
              <div className={styles.itemInfoBar}></div>
            </div>
            <div className={styles.footerContent}>5</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  )
};

export default Choose;
