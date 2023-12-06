import styles from "./sideBar.module.css";
import Choose from "@/app/src/components/icons/Choose";
import Search from "@/app/src/components/icons/Search";
import Likes from "@/app/src/components/icons/Likes";
import Top from "@/app/src/components/icons/Top";
import {MAIN_PURPLE} from "@/app/src/constants/colors";
import Account from "@/app/src/components/icons/Account";
import Invite from "@/app/src/components/icons/Invite";

interface IProps {
  iconName: string;
  hoveredItem: string;
  selectedItem: boolean;
}

const SideBarIcon = ({ iconName, hoveredItem, selectedItem }: IProps) => {
  return (
    <div className={styles.icon}>
      {iconName === 'choose' && <Choose stroke={hoveredItem === 'choose' || selectedItem ? MAIN_PURPLE : ''} />}
      {iconName === 'search' && <Search stroke={hoveredItem === 'search' || selectedItem ? MAIN_PURPLE : ''} />}
      {iconName === 'likes' && <Likes stroke={hoveredItem === 'likes' || selectedItem ? MAIN_PURPLE : ''} />}
      {iconName === 'top' && <Top stroke={hoveredItem === 'top' || selectedItem ? MAIN_PURPLE : ''} />}
      {iconName === 'profile' && <Account stroke={hoveredItem === 'profile' || selectedItem ? MAIN_PURPLE : ''} />}
      {iconName === 'invite' && <Invite stroke={hoveredItem === 'invite' || selectedItem ? MAIN_PURPLE : ''} />}
    </div>
  )
};

export default SideBarIcon;
