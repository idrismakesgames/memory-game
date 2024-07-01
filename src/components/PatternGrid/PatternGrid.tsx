import classes from "./PatternGrid.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store.ts";
import { FC, useEffect, useState } from "react";
import * as gameSliceActions from "../../state/game/gameSlice.ts";
import DifficultyHeader from "./DifficultyHeader/DifficultyHeader.tsx";
import ShowPatternGrid from "./ShowPatternGrid/ShowPatternGrid.tsx";
import { GamePlayModes } from "../../state/game/gameSlice.types.ts";
import EnterPatternGrid from "./EnterPatternGrid/EnterPatternGrid.tsx";

const PatternGrid: FC = () => {
  const [timeLeft, setTimeLeft] = useState(3);
  const { gamePatterns, difficulty, gamePlayMode } = useSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useDispatch<AppDispatch>();

  // Set Countdown Time for game to start
  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 700);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Use effect to create the game patterns whenever a game is restarted or difficulty is changed.
  useEffect(() => {
    dispatch(gameSliceActions.createGamePatterns(difficulty));
  }, [dispatch, difficulty]);

  const restartGame = (difficultyClicked: string) => {
    dispatch(gameSliceActions.createGamePatterns(difficulty));
    dispatch(gameSliceActions.setDifficulty(difficultyClicked));
    setTimeLeft(3);
  };

  return (
    <div className={classes.showPatternsContainer}>
      <DifficultyHeader
        restartGame={restartGame}
        difficultySelected={difficulty}
      />

      {timeLeft > 0 ? (
        <div className={classes.countdownTimer}>{timeLeft}</div>
      ) : (
        <>
          {gamePlayMode === GamePlayModes.showingPatterns && (
            <ShowPatternGrid
              gamePatterns={gamePatterns}
              restartGame={restartGame}
            />
          )}
          {(gamePlayMode === GamePlayModes.enteringPattern ||
            gamePlayMode === GamePlayModes.won) && (
            <EnterPatternGrid
              gamePatterns={gamePatterns}
              restartGame={restartGame}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PatternGrid;
