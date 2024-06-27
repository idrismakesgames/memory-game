import { GameMode, GamePatterns } from "../gameSlice.types.ts";

// Using the game mode array in state, create a game patterns object ot be used for this instance.
export const buildGamePatterns = (
  difficulty: string,
  gameModes: GameMode[],
) => {
  // Make sure we are accessing the right game mode based on difficulty.
  let gameModeIndex = 0;
  if (difficulty === "medium") {
    gameModeIndex = 1;
  } else if (difficulty === "hard") {
    gameModeIndex = 2;
  }

  // Go through all patterns and randomly select the specific number for this difficult (random and Unique)
  const numberOfPatterns = gameModes[gameModeIndex].colours.length;
  const indexesUsed: number[] = [];
  const patternsToUse: number[][] = [];
  for (let i = 0; i < numberOfPatterns; i++) {
    // if the index is unique continue and add the pattern, if not repeat.
    let isUnique = false;
    while (!isUnique) {
      const randomIndex = Math.floor(
        Math.random() * gameModes[gameModeIndex].patterns.length,
      );
      if (!indexesUsed.includes(randomIndex)) {
        indexesUsed.push(randomIndex);
        // add this pattern to the array
        patternsToUse.push(gameModes[gameModeIndex].patterns[randomIndex]);
        // Escape While Loop and continue to the new for cycle
        isUnique = true;
      }
    }
  }

  const gamePattern: GamePatterns = {
    timeBetweenPattern: gameModes[gameModeIndex].timeShownInSeconds,
    currentPatternShown: 0,
    chosenPatterns: patternsToUse,
    chosenColours: gameModes[gameModeIndex].colours,
    rowCount: gameModes[gameModeIndex].gridRows,
    colCount: gameModes[gameModeIndex].gridColumns,
  };

  return gamePattern;
};
