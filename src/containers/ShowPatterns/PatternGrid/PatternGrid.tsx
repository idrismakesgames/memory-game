import "./PatternGrid.css";
import {
  GamePatterns,
  GamePlayModes,
} from "../../../state/game/gameSlice.types.ts";
// Rendering the grid patterns passed to this method, very important
import { renderGrid } from "./PatternGridMethods/PatternGridMethods.tsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store.ts";
import * as gameSliceActions from "../../../state/game/gameSlice.ts";

interface PatternGridProps {
  gamePatterns: GamePatterns | null;
  restartGame: (difficulty: string) => void;
}

function PatternGrid(props: PatternGridProps) {
  const timePerPattern = props.gamePatterns?.timeBetweenPattern;
  const gamePatterns = props.gamePatterns as GamePatterns; // (Not null)
  const [patternsLeft, setPatternsLeft] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const gamePlayMode = useSelector(
    (state: RootState) => state.game.gamePlayMode,
  );

  useEffect(() => {
    if (patternsLeft === gamePatterns.chosenColours.length) return;
    const intervalId = setInterval(() => {
      setPatternsLeft(patternsLeft + 1);
    }, timePerPattern);
    return () => clearInterval(intervalId);
  }, [
    patternsLeft,
    timePerPattern,
    gamePatterns.chosenColours.length,
    dispatch,
  ]);

  useEffect(() => {
    // We have shown all the patterns, now we show empty grid and allow player to enter.
    if (patternsLeft === gamePatterns.chosenColours.length) {
      dispatch(gameSliceActions.setGameMode(GamePlayModes.enteringPattern));
    }
  }, [dispatch, gamePlayMode, patternsLeft, gamePatterns.chosenColours.length]);

  console.log("Patterns", patternsLeft, props.gamePatterns);
  if (props.gamePatterns !== null)
    return (
      <div className={"patternContainer"}>
        {renderGrid(
          props.gamePatterns.rowCount,
          props.gamePatterns.colCount,
          props.gamePatterns.chosenColours,
          patternsLeft,
          props.gamePatterns.chosenPatterns[patternsLeft],
        )}
      </div>
    );
}

export default PatternGrid;
