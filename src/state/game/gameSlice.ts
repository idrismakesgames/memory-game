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

const initialState: GameState = {
  gameName: "Memory Game",
  gamePlayMode: GamePlayModes.gameLoading,
  gameModes: null,
  difficulty: "",
  gamePatterns: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GamePlayModes>) => {
      state.gamePlayMode = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
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
        console.log("pattern Built", action.payload);
        state.gamePatterns = action.payload;
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

export const { setGameMode, setDifficulty } = gameSlice.actions;

export default gameSlice.reducer;
