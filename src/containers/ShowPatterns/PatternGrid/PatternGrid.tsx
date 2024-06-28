import "./PatternGrid.css";
import { GamePatterns } from "../../../state/game/gameSlice.types.ts";
// Rendering the grid patterns passed to this method, very important
import { renderGrid } from "./PatternGridMethods/PatternGridMethods.tsx";
import { useEffect, useState } from "react";

interface PatternGridProps {
  gamePatterns: GamePatterns | null;
  restartGame: (difficulty: string) => void;
}

function PatternGrid(props: PatternGridProps) {
  const timePerPattern = props.gamePatterns?.timeBetweenPattern;
  const gamePatterns = props.gamePatterns as GamePatterns; // (Not null)
  const [patternsLeft, setPatternsLeft] = useState(0);

  useEffect(() => {
    if (patternsLeft === gamePatterns.chosenColours.length) return;
    const intervalId = setInterval(() => {
      setPatternsLeft(patternsLeft + 1);
    }, timePerPattern);
    return () => clearInterval(intervalId);
  }, [patternsLeft, timePerPattern, gamePatterns.chosenColours.length]);

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
