"use client"

import styles from './header.module.css';
import Filters from "@/app/src/components/icons/Filters";
import { useState } from "react";
import {MAIN_PURPLE} from "@/app/src/constants/colors";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import MainLogo from "@/app/src/components/icons/MainLogog";

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
        <Filters stroke={hoveredItem || pathname === '/filters' ? MAIN_PURPLE : ''} />
      </Link>
    </div>
  )
};

export default Header;
