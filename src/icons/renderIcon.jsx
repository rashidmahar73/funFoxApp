import { BagIcon } from "./bag";
import { BooksIcon } from "./books";
import { GreenBookIcon } from "./greenBook";
import { PencilIcon } from "./pencil";
import { RightSideLayerIcon } from "./rightSideLayer";
import { ScaleIcon } from "./scale";
import { VictoryCapIcon } from "./victoryCap";
import { NextSlideIcon } from "./nextSlide";
import { SunnyDay } from "./sunnyDay";
import { RainyNight } from "./rainyNight";
import { PreviousSlideIcon } from "./previousSlide";

import {
  directionKeys,
  footerBtnKeys,
  sideLayerIconKeys,
} from "../utils/constants";
import { week2Keys } from "../pages/dashboard/week2/constants";

function RenderIcon(key) {
  if (key === sideLayerIconKeys.pencil) {
    return <PencilIcon />;
  } else if (key === sideLayerIconKeys.bag) {
    return <BagIcon />;
  } else if (key === sideLayerIconKeys.books) {
    return <BooksIcon />;
  } else if (key === directionKeys.right) {
    return <RightSideLayerIcon />;
  } else if (key === sideLayerIconKeys.scale) {
    return <ScaleIcon />;
  } else if (key === sideLayerIconKeys.greenBook) {
    return <GreenBookIcon />;
  } else if (key === sideLayerIconKeys.victoryCap) {
    return <VictoryCapIcon />;
  } else if (key === footerBtnKeys.previous) {
    return <PreviousSlideIcon />;
  } else if (key === footerBtnKeys.next) {
    return <NextSlideIcon />;
  } else if (key === week2Keys.sunnyDay) {
    return <SunnyDay />;
  } else if (key === week2Keys.rainyNight) {
    return <RainyNight />;
  }
}

export { RenderIcon };
