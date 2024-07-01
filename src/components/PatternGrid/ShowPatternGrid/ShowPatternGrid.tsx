import "./ShowPatternGrid.css";
import {
  GamePatterns,
  GamePlayModes,
} from "../../../state/game/gameSlice.types.ts";
import { renderGrid } from "./ShowPatternGridMethods/ShowPatternGridMethods.tsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/store.ts";
import * as gameSliceActions from "../../../state/game/gameSlice.ts";
import PatternsPreview from "../PatternsPreview/PatternsPreview.tsx";

interface ShowPatternGridProps {
  gamePatterns: GamePatterns | null;
  restartGame: (difficulty: string) => void;
}

function ShowPatternGrid(props: ShowPatternGridProps) {
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

      <PatternsPreview
        gamePatterns={props.gamePatterns}
        patternsLeft={patternsLeft}
        entering={false}
      />
    </div>
  );
}

export default ShowPatternGrid;
