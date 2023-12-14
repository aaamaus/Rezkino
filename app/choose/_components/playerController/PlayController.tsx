import styles from "../../_styles/InfoBlock.module.css";
import Pause from "@/app/src/components/icons/Pause";
import Play from "@/app/src/components/icons/Play";

interface IProps {
  setPauseController: (value: boolean) => void;
  pauseController: boolean;
}

const PlayController = ({ setPauseController, pauseController }: IProps) => {
  return (
    <div
      className={styles.playPauseWrapper}
      onClick={() => setPauseController(!pauseController)}
    >
      {pauseController ? <Pause /> : <Play />}
    </div>
  )
};

export default PlayController;
