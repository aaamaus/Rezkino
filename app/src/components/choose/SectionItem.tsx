import styles from "./InfoBlock.module.css";
import VolumeController from "@/app/src/components/choose/VolumeController";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import {useState} from "react";

interface IProps {
  currentId: number,
  item: {
    id: number,
    url: string
  }
}

const SectionItem = ({ currentId, item }: IProps) => {
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
				playing={currentId === item.id}
				loop={true}
				volume={volume as number / 100}
				url={item.url}
			/>}
      <div className={styles.bottomPlaceHolder}/>
      <VolumeController
        volume={volume as number}
        volumeController={volumeController}
        setVolume={setVolume}
      />
    </div>
  )
};

export default SectionItem;
