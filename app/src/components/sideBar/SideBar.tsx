"use client"

import styles from "./sideBar.module.css";
import {sideBarMenuItems, userMenuItems} from "@/app/src/constants/structure";
import SideBarIcon from "@/app/src/components/sideBar/SideBaricon";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const [hoveredItem, setHoveredItem] = useState('');
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.topSidebarWrapper}>
        {sideBarMenuItems.map((item) => {
          return (
            <Link
              href={item.path}
              className={styles.itemWrapper}
              key={item.title}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem('')}
            >
              <SideBarIcon
                iconName={item.path}
                hoveredItem={hoveredItem}
                selectedItem={pathname === `/${item.path}`}
              />
              <div className={`${styles.itemTitle} ${pathname === `/${item.path}` ? styles.itemTitleActive : ''}`}>
                {item.title}
              </div>
            </Link>
          )
        })}
      </div>
      <div>
        {userMenuItems.map((item) => {
          return (
            <Link
              href={item.path}
              className={styles.itemWrapper}
              key={item.title}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem('')}
            >
              <SideBarIcon
                iconName={item.path}
                hoveredItem={hoveredItem}
                selectedItem={pathname === `/${item.path}`}
              />
              <div className={`${styles.itemTitle} ${pathname === `/${item.path}` ? styles.itemTitleActive : ''}`}>
                {item.title}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
};

export default SideBar;
