import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store.ts";
import HelpImage1 from "../../assets/help1.svg?react";
import HelpImage2 from "../../assets/help2.svg?react";
import HelpImage3 from "../../assets/help3.svg?react";
import HelpImage4 from "../../assets/help4.svg?react";
import HelpImage5 from "../../assets/help5.svg?react";
import OkayIcon from "../../assets/okay.svg?react";
import GameButton from "../GameButton/GameButton.tsx";
import classes from "./HelpScreen.module.css";

import * as gameSliceActions from "../../state/game/gameSlice.ts";
import { GamePlayModes } from "../../state/game/gameSlice.types.ts";

function HelpScreen() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={classes.helpText}>
      <div className={classes.helpLine}>
        1. A sequence of coloured patterns will play
      </div>
      <div className={classes.helpImagesTop}>
        <HelpImage1 />
        <HelpImage2 />
        <HelpImage3 />
        <HelpImage4 />
      </div>
      <div className={classes.helpLine}>
        2. Fill the grid with the pattern that matches the colour
      </div>
      <div className={classes.helpImagesBottom}>
        <HelpImage5 />
      </div>

      <GameButton
        onClickMethod={() =>
          dispatch(gameSliceActions.setGameMode(GamePlayModes.difficultySelect))
        }
        buttonIcon={OkayIcon}
        buttonText={"Okay"}
      />
    </div>
  );
}

export default HelpScreen;
