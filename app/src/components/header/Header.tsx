"use client"

import styles from './header.module.css';
import Filters from "@/app/src/components/icons/Filters";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import MainLogo from "@/app/src/components/icons/MainLogog";
import { stokeHandler } from "@/app/src/utils/helpers";
import {SECONDARY_GRAY} from "@/app/src/constants/colors";
import HeaderClose from "@/app/src/components/icons/HeaderClose";
import { useRouter } from "next/navigation";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const refreshHandler = () => {
    window.location.href = '/choose';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.empty}/>
      <div
        className={styles.logoWrapper}
        onClick={refreshHandler}
        onMouseLeave={() => setHoveredLogo(false)}
        onMouseEnter={() => setHoveredLogo(true)}
      >
        <MainLogo stroke={hoveredLogo ? SECONDARY_GRAY : ''} />
      </div>
      {pathname === '/filters'
        ? <Link
          href={'/choose'}
          className={styles.filterButton}
          onMouseLeave={() => setHoveredItem(false)}
          onMouseEnter={() => setHoveredItem(true)}
        >
          <HeaderClose stroke={hoveredItem ? '#fff' : ''} />
        </Link> :
        <Link
          href={'/filters'}
          className={styles.filterButton}
          onMouseLeave={() => setHoveredItem(false)}
          onMouseEnter={() => setHoveredItem(true)}
        >
          <Filters stroke={stokeHandler(hoveredItem, pathname === '/filters')}/>
        </Link>
      }
    </div>
  )
};

export default Header;
