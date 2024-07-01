import { GamePatterns, WinningPatternType } from "../gameSlice.types.ts";

export const choosePatternToFill = (
  gamePatternsState: GamePatterns | null,
): WinningPatternType => {
  if (gamePatternsState !== null) {
    // Create copy of empty pattern for user to fill in by clicking
    const emptyPatternToFill = JSON.parse(
      JSON.stringify(
        gamePatternsState.chosenPatterns[
          gamePatternsState.chosenColours.length
        ],
      ),
    );

    const patternToFillIndex = Math.floor(
      Math.random() * gamePatternsState.chosenColours.length,
    );
    // Return randomised index of the chosen colour patterns for the user to recall
    return {
      patternToMatchIndex: patternToFillIndex,
      patternToMatch: gamePatternsState.chosenPatterns[patternToFillIndex],
      playerPattern: emptyPatternToFill,
    };
  } else
    return {
      patternToMatchIndex: 0,
      patternToMatch: [],
      playerPattern: [],
    };
};
