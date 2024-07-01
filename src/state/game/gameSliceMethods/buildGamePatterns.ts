import { GameMode, GamePatterns } from "../gameSlice.types.ts";

// Fisher Yates Shuffle algorithm to randomise the colours on each play through
function shuffle(arrayToShuffle: string[], arrayDarkToShuffle: string[]) {
  let counter = arrayToShuffle.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    const temp = arrayToShuffle[counter];
    arrayToShuffle[counter] = arrayToShuffle[index];
    arrayToShuffle[index] = temp;

    const tempDark = arrayDarkToShuffle[counter];
    arrayDarkToShuffle[counter] = arrayDarkToShuffle[index];
    arrayDarkToShuffle[index] = tempDark;
  }
  return [arrayToShuffle, arrayDarkToShuffle];
}

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
        // - 1 as the final pattern in the endpoint is an empty one for use in this app.
        Math.random() * (gameModes[gameModeIndex].patterns.length - 1),
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

  // Add one extra empty pattern, (Empty pattern is given at the end of the endpoint array.
  // this will exceed the colours count and let the game logic know it's an empty grid for the user to fill.
  patternsToUse.push(
    gameModes[gameModeIndex].patterns[
      gameModes[gameModeIndex].patterns.length - 1
    ],
  );

  const [shuffledChosenColours, shuffledChosenColoursDark]: string[][] =
    shuffle(
      JSON.parse(JSON.stringify(gameModes[gameModeIndex].colours)),
      JSON.parse(JSON.stringify(gameModes[gameModeIndex].darkColours)),
    );

  const gamePattern: GamePatterns = {
    timeBetweenPattern: gameModes[gameModeIndex].timeShownInSeconds * 1000,
    chosenPatterns: patternsToUse,
    chosenColours: shuffledChosenColours,
    chosenDarkColours: shuffledChosenColoursDark,
    rowCount: gameModes[gameModeIndex].gridRows,
    colCount: gameModes[gameModeIndex].gridColumns,
  };

  return gamePattern;
};
