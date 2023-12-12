import styles from "./InfoBlock.module.css";
import Slider from "@mui/material/Slider";
import {timeFormat} from "@/app/src/utils/helpers";

interface IProps {
  maxValue: number;
  time: number;
  player: {
    [key: string]: any
  },
  setTime: (value: number) => void;
}

const ProgressController = ({ maxValue, time, player, setTime }: IProps) => {
  return (
    <div className={styles.progressControllerWrapper}>
      <Slider
        className="progress-controller"
        min={0}
        max={maxValue as number}
        defaultValue={0}
        value={time}
        onChange={(_, value) => {
          if (player) {// @ts-ignore
            player.seekTo(value, 'seconds');
          }
          setTime(value as number);
        }}
      />
      <div className={styles.progresTimeWrapper}>{timeFormat(time)}</div>
    </div>
  )
};

export default ProgressController;
