import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GameMode,
  GamePatterns,
  GamePlayModes,
  GameState,
} from "./gameSlice.types.ts";
import { buildGameModes } from "./gameSliceMethods/buildGameModes.ts";
import mockDataDifficulties from "../../assets/mockData/mockDataDifficulties.json";
import { buildGamePatterns } from "./gameSliceMethods/buildGamePatterns.ts";
import { choosePatternToFill } from "./gameSliceMethods/choosePatternToFill.ts";

const initialState: GameState = {
  gameName: "Re-Fill",
  gameSubTitle: "A Pattern Memorisation Game",
  gamePlayMode: GamePlayModes.gameLoading,
  gameModes: null,
  difficulty: "",
  gamePatterns: null,
  winningPattern: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GamePlayModes>) => {
      state.gamePlayMode = action.payload;
      if (action.payload === GamePlayModes.enteringPattern) {
        state.winningPattern = choosePatternToFill(state.gamePatterns);
      }
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
    },
    updatePatternBeingFilled(state, action: PayloadAction<number>) {
      if (state.winningPattern !== null) {
        state.winningPattern.playerPattern[action.payload] =
          1 - state.winningPattern.playerPattern[action.payload];
        if (
          JSON.stringify(state.winningPattern.patternToMatch) ===
          JSON.stringify(state.winningPattern.playerPattern)
        ) {
          state.gamePlayMode = GamePlayModes.won;
          console.log("WIN");
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      initLoadGame.fulfilled,
      (state, action: PayloadAction<GameMode[]>) => {
        state.gamePlayMode = GamePlayModes.tutorialShowing;
        state.gameModes = action.payload;
      },
    );
    builder.addCase(
      createGamePatterns.fulfilled,
      (state, action: PayloadAction<GamePatterns>) => {
        state.gamePatterns = action.payload;
        state.gamePlayMode = GamePlayModes.showingPatterns;
      },
    );
  },
});

export const initLoadGame = createAsyncThunk("game/initLoadGame", async () => {
  return buildGameModes(JSON.stringify(mockDataDifficulties));
});

export const createGamePatterns = createAsyncThunk(
  "game/createGamePatterns",
  async (difficulty: string, { getState }) => {
    // eslint-disable-next-line
    const { game } = getState() as any;
    return buildGamePatterns(difficulty, game.gameModes);
  },
);

export const { setGameMode, setDifficulty, updatePatternBeingFilled } =
  gameSlice.actions;

export default gameSlice.reducer;
