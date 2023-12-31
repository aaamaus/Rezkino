"use client"

import styles from "../../_styles/InfoBlock.module.css";
import Slider from "@mui/material/Slider";
import Volume from "@/app/src/components/icons/Volume";
import {useState} from "react";
import Muted from "@/app/src/components/icons/Muted";

interface IProps {
  volume: number;
  setVolume: (value: number | number[]) => void;
}

const VolumeController = ({ volume, setVolume }: IProps) => {
  const [volumeBar, setVolumeBar] = useState(false);

  const volumeIconClickHandler = () => {
    if (volume !== 0) {
      setVolume(0)
    }

    if (volume === 0) {
      setVolume(50)
    }
  };

  return (
    <div
      onMouseLeave={() => setVolumeBar(false)}
      onMouseEnter={() => setVolumeBar(true)}
      className={styles.sliderWrapper}
    >
      {volumeBar && <div className={styles.sliderSlide}>
				<Slider
					defaultValue={50}
					value={volume}
					orientation="vertical"
					onChange={(_, value) => setVolume(value)}
				/>
			</div>}
      <div
        onClick={volumeIconClickHandler}
        className={styles.volumeIconWrapper}
      >
        {!volume ? <Muted /> : <Volume />}
      </div>
    </div>
  )
};

export default VolumeController;
