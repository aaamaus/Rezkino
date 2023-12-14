import styles from "../../_styles/InfoBlock.module.css";
import Comments from "@/app/src/components/icons/Comments";
import Share from "@/app/src/components/icons/Share";
import { DEFAULT_WHITE } from "@/app/src/constants/colors";
import {MainLike} from "@/app/src/components/icons/MainLike";
import Saved from "@/app/src/components/icons/Saved";

interface IProps {
  iconName: string;
  hoveredItem: string;
}

const InfoBlockIcons = ({ iconName, hoveredItem }: IProps) => {
  return (
    <div className={styles.icon}>
      {iconName === 'likes' && <MainLike fill={hoveredItem === 'likes' ? DEFAULT_WHITE : ''} />}
      {iconName === 'comments' && <Comments fill={hoveredItem === 'comments' ? DEFAULT_WHITE : ''} />}
      {iconName === 'share' && <Share fill={hoveredItem === 'share' ? DEFAULT_WHITE : ''} />}
      {iconName === 'saved' && <Saved stroke={hoveredItem === 'saved' ? DEFAULT_WHITE : ''}/>}
    </div>
  )
};

export default InfoBlockIcons;
