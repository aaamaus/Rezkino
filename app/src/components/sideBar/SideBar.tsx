"use client"

import styles from "./sideBar.module.css";
import {ROUTES_WITHOUT_SIDEBAR, sideBarMenuItems, userMenuItems} from "@/app/src/constants/structure";
import SideBarIcon from "@/app/src/components/sideBar/SideBaricon";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuWrapper from "@/app/src/components/semantic/MenuWrapper";

const SideBar = () => {
  const [hoveredItem, setHoveredItem] = useState('');
  const pathname = usePathname();

  return !ROUTES_WITHOUT_SIDEBAR.includes(pathname) && (
    <div className={styles.wrapper}>
      <div className={styles.topSidebarWrapper}>
        <MenuWrapper>
          {sideBarMenuItems.map((item) => {
            return (
             <li key={item.title} className={styles.itemSemanticWrapper}>
               <Link
                 href={item.path}
                 className={styles.itemWrapper}
                 onMouseEnter={() => setHoveredItem(item.path)}
                 onMouseLeave={() => setHoveredItem('')}
               >
                 <SideBarIcon
                   iconName={item.path}
                   hoveredItem={pathname !== `/${item.path}` ? hoveredItem : ''}
                   selectedItem={pathname === `/${item.path}`}
                 />
                 <div className={`${styles.itemTitle} ${pathname === `/${item.path}` ? styles.itemTitleActive : ''}`}>
                   {item.title}
                 </div>
               </Link>
             </li>
            )
          })}
        </MenuWrapper>
      </div>
      <div>
        <MenuWrapper>
          {userMenuItems.map((item) => {
            return (
              <li key={item.title} className={styles.itemSemanticWrapper}>
                <Link
                  href={item.path}
                  className={styles.itemWrapper}
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
              </li>
            )
          })}
        </MenuWrapper>
      </div>
    </div>
  )
};

export default SideBar;
