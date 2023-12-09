import styles from "./InfoBlock.module.css";
import VolumeController from "@/app/src/components/choose/VolumeController";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import {useState} from "react";
import PlayController from "@/app/src/components/choose/PlayController";

interface IProps {
  currentId: number,
  item: {
    id: number,
    url: string
  }
}

const SectionItem = ({ currentId, item }: IProps) => {
  const [pauseController, setPauseController] = useState(true);
  const [volume, setVolume] = useState<number | number[]>(50);
  const [volumeController, setVolumeController] = useState(false);

  return (
    <div
      onMouseEnter={() => setVolumeController(true)}
      onMouseLeave={() => setVolumeController(false)}
      className={styles.imageWrapper}
    >
      <div className={styles.topPlaceHolder}/>
      {currentId === item.id && <ReactPlayer
				controls={false}
				width={'100%'}
				height={'100%'}
        onProgress={(value) => console.log(value)}
				playing={currentId === item.id && pauseController}
				loop={true}
				volume={volume as number / 100}
				url={item.url}
			/>}
      <div className={styles.bottomPlaceHolder}/>
      {volumeController && <div className={styles.playerControls}>
				<PlayController
					pauseController={pauseController}
					setPauseController={setPauseController}
				/>
				<VolumeController
					volume={volume as number}
					setVolume={setVolume}
				/>
			</div>}
    </div>
  )
};

export default SectionItem;
