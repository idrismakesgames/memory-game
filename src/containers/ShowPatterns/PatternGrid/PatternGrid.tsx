import "./PatternGrid.css";
import { GamePatterns } from "../../../state/game/gameSlice.types.ts";
// Rendering the grid patterns passed to this method, very important
import { renderGrid } from "./PatternGridMethods/PatternGridMethods.tsx";

interface PatternGridProps {
  gamePatterns: GamePatterns | null;
  restartGame: (difficulty: string) => void;
}

function PatternGrid(props: PatternGridProps) {
  console.log(props.gamePatterns);
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
