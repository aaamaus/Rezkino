"use client"

import styles from "./Choose.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCreative } from 'swiper/modules';
import mockPreview from './../../public/images/mockPreview.png';
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/effect-creative';

const Choose = () => {
  return (
    <main>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={500}
        mousewheel={true}
        modules={[Mousewheel, Pagination, EffectCreative]}
        className={styles.mySwiper}
        speed={1000}
      >
        <SwiperSlide>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.imageWrapper}>
                <Image className={styles.img} src={mockPreview} alt={"preview"} />
              </div>
              <div className={styles.itemInfoBar}></div>
            </div>
            <div className={styles.footerContent}></div>
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
            <div className={styles.footerContent}></div>
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
            <div className={styles.footerContent}></div>
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
            <div className={styles.footerContent}></div>
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
            <div className={styles.footerContent}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  )
};

export default Choose;
