import classes from "./ShowPatterns.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store.ts";
import { useEffect, useState } from "react";
import * as gameSliceActions from "../../state/game/gameSlice.ts";

function ShowPatterns() {
  const difficultySelected = useSelector(
    (state: RootState) => state.game.difficulty,
  );
  // const gamePatterns = useSelector(
  //   (state: RootState) => state.game.gamePatterns,
  // );
  const dispatch = useDispatch<AppDispatch>();

  const [timeLeft, setTimeLeft] = useState(3);

  // Set Countdown Time for game to start
  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    dispatch(gameSliceActions.createGamePatterns(difficultySelected)).then(
      () => {
        console.log(difficultySelected);
      },
    );
  }, [dispatch, difficultySelected]);

  const restartGame = (difficulty: string) => {
    dispatch(gameSliceActions.setDifficulty(difficulty));
    setTimeLeft(3);
  };

  return (
    <div className={classes.showPatternsContainer}>
      <div className={classes.difficultiesContainer}>
        <div
          onClick={() => restartGame("easy")}
          className={`${classes.difficultyOption} ${difficultySelected === "easy" && classes.isSelected}`}
        >
          Easy
        </div>
        <div
          onClick={() => restartGame("medium")}
          className={`${classes.difficultyOption} ${difficultySelected === "medium" && classes.isSelected}`}
        >
          Medium
        </div>
        <div
          onClick={() => restartGame("hard")}
          className={`${classes.difficultyOption} ${difficultySelected === "hard" && classes.isSelected}`}
        >
          Hard
        </div>
      </div>

      {timeLeft > 0 ? (
        <div className={classes.countdownTimer}>{timeLeft} ...</div>
      ) : (
        <div>hehehehe</div>
      )}
    </div>
  );
}

export default ShowPatterns;
