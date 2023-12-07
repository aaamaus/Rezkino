"use client"

import styles from './header.module.css';
import Filters from "@/app/src/components/icons/Filters";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import MainLogo from "@/app/src/components/icons/MainLogog";
import { stokeHandler } from "@/app/src/utils/helpers";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div/>
      <MainLogo />
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
