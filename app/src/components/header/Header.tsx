"use client"

import styles from './header.module.css';
import Filters from "@/app/src/components/icons/Filters";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import MainLogo from "@/app/src/components/icons/MainLogog";
import { stokeHandler } from "@/app/src/utils/helpers";
import {MAIN_WHITE} from "@/app/src/constants/colors";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div/>
      <div
        className={styles.logoWrapper}
        onMouseLeave={() => setHoveredLogo(false)}
        onMouseEnter={() => setHoveredLogo(true)}
      >
        <MainLogo stroke={hoveredLogo ? MAIN_WHITE : ''} />
      </div>
      <Link
        href={'/filters'}
        className={styles.filterButton}
        onMouseLeave={() => setHoveredItem(false)}
        onMouseEnter={() => setHoveredItem(true)}
      >
        <Filters stroke={stokeHandler(hoveredItem, pathname === '/filters')} />
      </Link>
    </div>
  )
};

export default Header;
