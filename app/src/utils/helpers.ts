import { MAIN_PURPLE, MAIN_WHITE } from "@/app/src/constants/colors";

export const stokeHandler = (hovered: boolean, selected: boolean): string => {
  if (selected) {
    return MAIN_PURPLE;
  }
  if (hovered) {
    return MAIN_WHITE;
  }

  return ''
};

export const timeFormat = (duration: number) => {
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  let ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
};

