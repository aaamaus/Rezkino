import styles from "./sideBar.module.css";
import Choose from "@/app/src/components/icons/Choose";
import Search from "@/app/src/components/icons/Search";
import Likes from "@/app/src/components/icons/Likes";
import Top from "@/app/src/components/icons/Top";
import Account from "@/app/src/components/icons/Account";
import Invite from "@/app/src/components/icons/Invite";
import { stokeHandler } from "@/app/src/utils/helpers";

interface IProps {
  iconName: string;
  hoveredItem: string;
  selectedItem: boolean;
}

const SideBarIcon = ({ iconName, hoveredItem, selectedItem }: IProps) => {
  return (
    <div className={styles.icon}>
      {iconName === 'choose' && <Choose stroke={stokeHandler(hoveredItem === 'choose', selectedItem)} />}
      {iconName === 'search' && <Search stroke={stokeHandler(hoveredItem === 'search', selectedItem)} />}
      {iconName === 'likes' && <Likes stroke={stokeHandler(hoveredItem === 'likes', selectedItem)} />}
      {iconName === 'top' && <Top stroke={stokeHandler(hoveredItem === 'top', selectedItem)} />}
      {iconName === 'profile' && <Account stroke={stokeHandler(hoveredItem === 'profile', selectedItem)} />}
      {iconName === 'invite' && <Invite stroke={stokeHandler(hoveredItem === 'invite', selectedItem)} />}
    </div>
  )
};

export default SideBarIcon;
