export enum GamePlayModes {
  gameLoading,
  tutorialShowing,
  difficultySelect,
  showingPatterns,
  enteringPattern,
  won,
}

export interface GameMode {
  difficulty: string;
  gridRows: number;
  gridColumns: number;
  colours: string[];
  darkColours: string[];
  timeShownInSeconds: number;
  patterns: number[][];
}

export interface GameState {
  gameName: string;
  gameSubTitle: string;
  gamePlayMode: GamePlayModes;
  gameModes: GameMode[] | null;
  difficulty: string;
  gamePatterns: GamePatterns | null;
  winningPattern: WinningPatternType | null;
}

export interface GamePatterns {
  timeBetweenPattern: number;
  chosenPatterns: number[][];
  chosenColours: string[];
  chosenDarkColours: string[];
  rowCount: number;
  colCount: number;
}

export interface WinningPatternType {
  patternToMatchIndex: number;
  patternToMatch: number[];
  playerPattern: number[];
}
