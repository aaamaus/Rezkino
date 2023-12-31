import styles from "../../_styles/InfoBlock.module.css";
import VolumeController from "@/app/choose/_components/playerController/VolumeController";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import {useEffect, useState} from "react";
import PlayController from "@/app/choose/_components/playerController/PlayController";
import ProgressController from "@/app/choose/_components/playerController/ProgressController";
import ChooseInfoBlock from "@/app/choose/_components/rightData/ChooseInfoBlock";
import ChooseFooter from "@/app/choose/_components/bottomData/ChooseFooter";
import {ISectionItemProps} from "@/app/choose/_types/interfaces";
import useFilmsRU from "@/app/src/hooks/useFilmsRU";
import useFilmsUA from "@/app/src/hooks/useFilmsUA";
import useFilmsEN from "@/app/src/hooks/useFilmsEN";
import Image from "next/image";
import PlayL from "@/app/src/components/icons/PlayL";
import Loader from "@/app/src/components/icons/Loader";

let timer: any;

const SectionItem = ({ currentId, item, api }: ISectionItemProps) => {
  const [pauseController, setPauseController] = useState(true);
  const [volume, setVolume] = useState<number | number[]>(
    JSON.parse(localStorage.getItem('volume') as string)
  );
  const [volumeController, setVolumeController] = useState(false);
  const [hoveredPlayL, setHoveredPlayL] = useState(false);
  const [player, setPlayer] = useState(null);
  const [time, setTime] = useState<number | number[]>(0);
  const [maxValue, setMaxValue] = useState<number | number[]>(0);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [readyFlag, setReadyFlag] = useState(false);
  const { uaData } = useFilmsUA(item.id);
  const { ruFilm } = useFilmsRU(item.id);
  const { enData } = useFilmsEN(item.id);

  useEffect(() => {
    if (uaData?.results[0]?.key) {
      setUrl(uaData?.results[0]?.key);
    } else if (!uaData?.results[0]?.key && ruFilm?.results[0]?.key) {
      setUrl(ruFilm?.results[0]?.key);
    } else {
      setUrl(enData?.results[0]?.key);
    }
  }, [uaData, ruFilm, enData]);

  useEffect(() => {
    setTime(0);
    setError('');
  }, [currentId]);

  useEffect(() => {
    localStorage.setItem('volume', JSON.stringify(volume));
  }, [volume]);

  useEffect(() => () => {
    clearTimeout(timer);
  }, []);

  return (url && !error) && (
    <div className={styles.videoBlockContent}>
      <div
        onMouseEnter={() => setVolumeController(true)}
        onMouseLeave={() => setVolumeController(false)}
      >
        <div className={styles.topPlaceHolder}/>
        {(!readyFlag || error) && < div className={styles.loader}><Loader /></div>}
        <div className={`${styles.cover} ${!pauseController ? styles.coverPaused : ''}`}
             style={!pauseController ? {
               backgroundImage: `url(${process.env.NEXT_PUBLIC_IMG_BASE_URL}${item.backdrop_path})`,
               opacity: 1
             } : {
               backgroundImage: `url(${process.env.NEXT_PUBLIC_IMG_BASE_URL}${item.backdrop_path})`,
               opacity: 0
             }}
             onClick={() => setPauseController(!pauseController)}
        >
          {!pauseController && (
            <div
              className={styles.playIconWrapper}
              onMouseEnter={() => setHoveredPlayL(true)}
              onMouseLeave={() => setHoveredPlayL(false)}
            >
              <PlayL hovered={hoveredPlayL}/>
            </div>
          )}
        </div>
        <ReactPlayer
          controls={false}
          progressInterval={time as number}
          onProgress={(value) => setTime(Math.round(value.playedSeconds))}
          onReady={(e: any) => {
            timer = setTimeout(() =>{
              setReadyFlag(true);
            }, 200);

            setPlayer(e['player'])

            const duration = e['player'].getDuration();
            setMaxValue(duration);
          }}
          onError={(e) => {
            if (e) {
              api.moveSectionDown();
              setError(e);
            }
          }}
          playing={currentId === item.id && pauseController}
          loop={true}
          volume={volume as number / 100}
          url={`https://www.youtube.com/watch?v=${url}`}
        />
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
      <div className={styles.rightInfoBlock}><ChooseInfoBlock voteCount={item.vote_count} /></div>
      <div className={styles.bottomInfoBlock}>
        <ChooseFooter
          voteAverage={item.vote_average}
          genres={item.genre_ids}
          date={item.release_date}
        />
      </div>
    </div>
  )
};

export default SectionItem;
