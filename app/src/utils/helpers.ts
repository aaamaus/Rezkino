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
