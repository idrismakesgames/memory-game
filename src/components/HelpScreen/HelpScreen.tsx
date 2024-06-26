import HelpImage1 from "../../assets/help1.svg?react";
import HelpImage2 from "../../assets/help2.svg?react";
import HelpImage3 from "../../assets/help3.svg?react";
import HelpImage4 from "../../assets/help4.svg?react";
import HelpImage5 from "../../assets/help5.svg?react";
import PlayIcon from "../../assets/play.svg?react";
import GameButton from "../GameButton/GameButton.tsx";
import classes from "./HelpScreen.module.css";

function HelpScreen() {
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

      <GameButton buttonIcon={PlayIcon} buttonText={"Play"} />
    </div>
  );
}

export default HelpScreen;
