import "./EnterPatternGrid.css";
import {
  GamePatterns,
  GamePlayModes,
} from "../../../state/game/gameSlice.types.ts";
import { renderEnterGrid } from "./EnterPatternGridMethods/EnterPatternGridMethods.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store.ts";
import RetryIcon from "../../../assets/icons/retry.svg?react";
import NextIcon from "../../../assets/icons/next.svg?react";
import GameButton from "../../GameButton/GameButton.tsx";
import * as gameSliceActions from "../../../state/game/gameSlice.ts";
import PatternsPreview from "../PatternsPreview/PatternsPreview.tsx";

interface EnterPatternGridProps {
  gamePatterns: GamePatterns | null;
  restartGame: (difficulty: string) => void;
}

const EnterPatternGrid = (props: EnterPatternGridProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { difficulty, winningPattern, gamePlayMode } = useSelector(
    (state: RootState) => state.game,
  );

  const onClickMethod = (index: number) => {
    dispatch(gameSliceActions.updatePatternBeingFilled(index));
    console.log("oooooooo", index, winningPattern);
  };

  const gamePatterns = props.gamePatterns as GamePatterns; // (Not null)

  return (
    <div className={"enterPatternContainer"}>
      {winningPattern !== null &&
        renderEnterGrid(
          gamePatterns.rowCount,
          gamePatterns.colCount,
          gamePatterns.chosenColours,
          gamePatterns.chosenDarkColours,
          winningPattern.patternToMatchIndex,
          winningPattern.playerPattern,
          onClickMethod,
          gamePlayMode === GamePlayModes.won,
        )}

      {gamePlayMode !== GamePlayModes.won && (
        <PatternsPreview
          gamePatterns={props.gamePatterns}
          patternsLeft={winningPattern?.patternToMatchIndex}
          entering={true}
        />
      )}

      {gamePlayMode === GamePlayModes.won && (
        <div className={"winMessage"}>Success!</div>
      )}

      <div className={"bottomButtons"}>
        <GameButton
          onClickMethod={() => props.restartGame(difficulty)}
          buttonIcon={gamePlayMode === GamePlayModes.won ? NextIcon : RetryIcon}
          buttonText={gamePlayMode === GamePlayModes.won ? "Next" : "Restart"}
          buttonSubText={gamePlayMode === GamePlayModes.won ? "" : ""}
          disabled={false}
          height={20}
        />
      </div>
    </div>
  );
};

export default EnterPatternGrid;
