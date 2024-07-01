import "./ShowPatternGrid.css";
import {
  GamePatterns,
  GamePlayModes,
} from "../../../state/game/gameSlice.types.ts";
import { renderGrid } from "./ShowPatternGridMethods/ShowPatternGridMethods.tsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store.ts";
import * as gameSliceActions from "../../../state/game/gameSlice.ts";
import RetryIcon from "../../../assets/icons/retry.svg?react";
import GameButton from "../../GameButton/GameButton.tsx";

interface PatternGridProps {
  gamePatterns: GamePatterns | null;
  restartGame: (difficulty: string) => void;
}

function ShowPatternGrid(props: PatternGridProps) {
  const { gamePlayMode, difficulty } = useSelector(
    (state: RootState) => state.game,
  );
  const timePerPattern = props.gamePatterns?.timeBetweenPattern;
  const gamePatterns = props.gamePatterns as GamePatterns; // (Not null)
  const [patternsLeft, setPatternsLeft] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (patternsLeft === gamePatterns.chosenColours.length) return;
    const intervalId = setInterval(() => {
      setPatternsLeft(patternsLeft + 1);
    }, timePerPattern);
    return () => clearInterval(intervalId);
  }, [patternsLeft]);

  useEffect(() => {
    // We have shown all the patterns, now we show empty grid and allow player to enter.
    if (patternsLeft === gamePatterns.chosenColours.length) {
      dispatch(gameSliceActions.setGameMode(GamePlayModes.enteringPattern));
    }
  }, [patternsLeft]);

  return (
    <div className={"patternContainer"}>
      {props.gamePatterns !== null &&
        renderGrid(
          props.gamePatterns.rowCount,
          props.gamePatterns.colCount,
          props.gamePatterns.chosenColours,
          props.gamePatterns.chosenDarkColours,
          patternsLeft,
          props.gamePatterns.chosenPatterns[patternsLeft],
        )}
      {gamePlayMode === GamePlayModes.enteringPattern && (
        <div className={"bottomButtons"}>
          <GameButton
            onClickMethod={() => props.restartGame(difficulty)}
            buttonIcon={RetryIcon}
            buttonText={"Retry"}
            disabled={false}
            height={20}
          />
        </div>
      )}
    </div>
  );
}

export default ShowPatternGrid;
