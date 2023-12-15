import styles from "../../_styles/InfoBlock.module.css";
import VolumeController from "@/app/choose/_components/playerController/VolumeController";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import {useEffect, useState} from "react";
import PlayController from "@/app/choose/_components/playerController/PlayController";
import ProgressController from "@/app/choose/_components/playerController/ProgressController";
import ChooseInfoBlock from "@/app/choose/_components/rightData/ChooseInfoBlock";
import ChooseFooter from "@/app/choose/_components/bottomData/ChooseFooter";
import {useGetCurrentVideoQuery} from "@/app/store/api/filmAPI";
import {ISectionItemProps} from "@/app/choose/_types/interfaces";
import {UA} from "@/app/src/constants/local";

const SectionItem = ({ currentId, item }: ISectionItemProps) => {
  const [pauseController, setPauseController] = useState(true);
  const [volume, setVolume] = useState<number | number[]>(50);
  const [volumeController, setVolumeController] = useState(false);
  const [player, setPlayer] = useState(null);
  const [time, setTime] = useState<number | number[]>(0);
  const [maxValue, setMaxValue] = useState<number | number[]>(0);
  const { data, isLoading } = useGetCurrentVideoQuery({
    queries: { language: UA },
    id: item.id
  });

  useEffect(() => {
    setTime(0);
  }, [currentId]);

  return (!isLoading && data?.results[0]?.key) && (
    <div className={styles.videoBlockContent}>
      <div
        onMouseEnter={() => setVolumeController(true)}
        onMouseLeave={() => setVolumeController(false)}
      >
        <div className={styles.topPlaceHolder}/>
        <div className={styles.cover} onClick={() => setPauseController(!pauseController)}/>
        {currentId === item.id && <ReactPlayer
					controls={false}
					progressInterval={time as number}
					onProgress={(value) => setTime(Math.round(value.playedSeconds))}
					onDuration={(value) => setMaxValue(value)} // @ts-ignore
					onReady={(e) => setPlayer(e['player'])}
					playing={currentId === item.id && pauseController}
					loop={true}
					volume={volume as number / 100}
					url={`https://www.youtube.com/watch?v=${data?.results[0]?.key}`}
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
      <div className={styles.rightInfoBlock}><ChooseInfoBlock /></div>
      <div className={styles.bottomInfoBlock}><ChooseFooter /></div>
    </div>
  )
};

export default SectionItem;
