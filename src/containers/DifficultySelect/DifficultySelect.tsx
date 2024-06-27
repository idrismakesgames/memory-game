import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store.ts";
import EasyUnselected from "../../assets/easyUnselected.svg?react";
import EasySelected from "../../assets/easySelected.svg?react";
import MediumUnselected from "../../assets/mediumUnselected.svg?react";
import MediumSelected from "../../assets/mediumSelected.svg?react";
import HardUnselected from "../../assets/hardUnselected.svg?react";
import HardSelected from "../../assets/hardSelected.svg?react";
import PlayIcon from "../../assets/play.svg?react";
import GameButton from "../../components/GameButton/GameButton.tsx";
import classes from "./DifficultySelect.module.css";
import * as gameSliceActions from "../../state/game/gameSlice.ts";
import { GamePlayModes } from "../../state/game/gameSlice.types.ts";
import { useState } from "react";

function DifficultySelect() {
  const dispatch = useDispatch<AppDispatch>();
  const difficultySelected = useSelector(
    (state: RootState) => state.game.difficulty,
  );
  const [open, setOpen] = useState("");

  const mouseOut = () => {
    setOpen("");
  };

  const selectDifficulty = (difficulty: string) => {
    dispatch(gameSliceActions.setDifficulty(difficulty));
  };

  return (
    <div className={classes.difficultyText}>
      <div className={classes.difficultyLine}>Select Difficulty</div>
      <div className={classes.difficultyImages}>
        <div
          className={classes.difficultyEasy}
          onClick={() => selectDifficulty("easy")}
          onMouseOver={() => setOpen("easy")}
          onMouseOut={mouseOut}
        >
          {open === "easy" || difficultySelected === "easy" ? (
            <EasySelected />
          ) : (
            <EasyUnselected />
          )}
        </div>
        <div
          className={classes.difficultyMedium}
          onClick={() => selectDifficulty("medium")}
          onMouseOver={() => setOpen("medium")}
          onMouseOut={mouseOut}
        >
          {open === "medium" || difficultySelected === "medium" ? (
            <MediumSelected />
          ) : (
            <MediumUnselected />
          )}
        </div>
        <div
          className={classes.difficultyHard}
          onClick={() => selectDifficulty("hard")}
          onMouseOver={() => setOpen("hard")}
          onMouseOut={mouseOut}
        >
          {open === "hard" || difficultySelected === "hard" ? (
            <HardSelected />
          ) : (
            <HardUnselected />
          )}
        </div>
      </div>
      <GameButton
        onClickMethod={() =>
          dispatch(gameSliceActions.setGameMode(GamePlayModes.showingPatterns))
        }
        buttonIcon={PlayIcon}
        buttonText={difficultySelected}
        disabled={!difficultySelected}
      />
    </div>
  );
}

export default DifficultySelect;
