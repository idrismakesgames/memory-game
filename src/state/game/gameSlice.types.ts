export enum GamePlayModes {
  gameLoading,
  tutorialShowing,
  difficultySelect,
  showingPatterns,
  enteringPattern,
}

export interface GameMode {
  difficulty: string;
  gridRows: number;
  gridColumns: number;
  colours: string[];
  timeShownInSeconds: number;
  patterns: number[][];
}

export interface GameState {
  gameName: string;
  gamePlayMode: GamePlayModes;
  gameModes: GameMode[] | null;
  difficulty: string;
  gamePatterns: GamePatterns | null;
}

export interface GamePatterns {
  timeBetweenPattern: number;
  currentPatternShown: number;
  chosenPatterns: number[][];
  chosenColours: string[];
}
