import "./PatternGrid.css";
import { GamePatterns } from "../../../state/game/gameSlice.types.ts";
// Rendering the grid patterns passed to this method, very important
import { renderGrid } from "./PatternGridMethods/PatternGridMethods.tsx";
import { useEffect } from "react";

interface PatternGridProps {
  gamePatterns: GamePatterns | null;
  restartGame: (difficulty: string) => void;
}

function PatternGrid(props: PatternGridProps) {
  const timePerPattern = props.gamePatterns?.timeBetweenPattern;
  const gamePatterns = props.gamePatterns as GamePatterns; // (Not null)

  useEffect(() => {
    if (gamePatterns.currentPatternShown >= gamePatterns.chosenPatterns.length)
      return;
    const intervalId = setInterval(() => {
      // Increase the currentPatternShownIndex
    }, timePerPattern);
    return () => clearInterval(intervalId);
  }, [
    gamePatterns.currentPatternShown,
    gamePatterns.chosenPatterns.length,
    timePerPattern,
  ]);

  console.log("Patterns", props.gamePatterns);
  if (props.gamePatterns !== null)
    return (
      <div className={"patternContainer"}>
        {renderGrid(
          props.gamePatterns.rowCount,
          props.gamePatterns.colCount,
          props.gamePatterns.chosenColours,
          props.gamePatterns.currentPatternShown,
          props.gamePatterns.chosenPatterns[
            props.gamePatterns.currentPatternShown
          ],
        )}
      </div>
    );
}

export default PatternGrid;
