"use client"

import styles from "./Choose.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import mockPreview from './../../public/images/mockPreview.png';
import Image from 'next/image'

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
      >
        <SwiperSlide>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.imageWrapper}>
                <Image className={styles.img} src={mockPreview} alt={"preview"} />
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
                <Image className={styles.img} src={mockPreview} alt={"preview"} />
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
