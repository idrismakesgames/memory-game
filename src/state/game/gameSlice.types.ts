export interface GameMode {
  difficultyName: string;
  gridRows: number;
  gridColumns: number;
  colours: string[];
  timeShownInSeconds: number;
  patterns: number[][];
}

export interface GameState {
  gameName: string;
  gameLoading: boolean;
  gameModes: GameMode[] | null;
  showHelpText: boolean;
}
