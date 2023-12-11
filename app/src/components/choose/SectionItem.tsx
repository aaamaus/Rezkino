import styles from "./InfoBlock.module.css";
import VolumeController from "@/app/src/components/choose/VolumeController";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import {useEffect, useState} from "react";
import PlayController from "@/app/src/components/choose/PlayController";
import ProgressController from "@/app/src/components/choose/ProgressController";

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
  const [player, setPlayer] = useState(null);
  const [time, setTime] = useState<number | number[]>(0);
  const [maxValue, setMaxValue] = useState<number | number[]>(0);

  useEffect(() => {
    setTime(0);
  }, [currentId]);

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
				progressInterval={time as number}
        onProgress={(value) => setTime(Math.round(value.playedSeconds))}
        onDuration={(value) => setMaxValue(value)} // @ts-ignore
				onReady={(e) => setPlayer(e['player'])}
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
        <ProgressController
					maxValue={maxValue as number}
          time={time as number}
          player={player as any}
          setTime={setTime}
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
