import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store.ts";
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
import DifficultyButton from "../../components/DifficultyButton/DifficultyButton.tsx";

const difficulties = ["Easy", "Medium", "Hard"];
const difficultyElements = {
  easySelectedComponent: EasySelected,
  easyUnselectedComponent: EasyUnselected,
  mediumSelectedComponent: MediumSelected,
  mediumUnselectedComponent: MediumUnselected,
  hardSelectedComponent: HardSelected,
  hardUnselectedComponent: HardUnselected,
};
console.log(difficultyElements);

function DifficultySelect() {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState("");
  const [difficultySelected, setDifficultySelected] = useState("");

  const mouseOut = () => {
    setOpen("");
  };

  const selectDifficulty = (difficulty: string) => {
    setDifficultySelected(difficulty);
    // Send off to global state
  };

  return (
    <div className={classes.difficultyText}>
      <div className={classes.difficultyLine}>Select Difficulty</div>
      <div className={classes.difficultyImages}>
        {difficulties.map((difficulty: string) => (
          <div
            className={classes[`difficulty${difficulty}`]}
            onClick={() => selectDifficulty(difficulty)}
            onMouseOver={() => setOpen(difficulty)}
            onMouseOut={mouseOut}
          >
            <DifficultyButton
              difficultyName={difficulty}
              difficultyElementSelected={EasySelected}
              difficultyElementUnselected={EasyUnselected}
              selectedDifficulty={difficultySelected}
              hoveredDifficulty={open}
            />
          </div>
        ))}
        <div
          className={classes.difficultyEasy}
          onClick={() => selectDifficulty("easy")}
          onMouseOver={() => setOpen("easy")}
          onMouseOut={mouseOut}
        >
          <DifficultyButton
            difficultyName={"easy"}
            difficultyElementSelected={EasySelected}
            difficultyElementUnselected={EasyUnselected}
            selectedDifficulty={difficultySelected}
            hoveredDifficulty={open}
          />
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
