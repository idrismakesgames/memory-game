import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamePlayModes, GameState } from "./gameSlice.types.ts";

const initialState: GameState = {
  gameName: "Memory Game",
  gamePlayMode: GamePlayModes.gameLoading,
  gameModes: null,
  difficulty: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GamePlayModes>) => {
      state.gamePlayMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initLoadGame.pending, () => {
      console.log("Loading Game");
    });
    builder.addCase(initLoadGame.fulfilled, (state) => {
      state.gamePlayMode = GamePlayModes.tutorialShowing;
    });
  },
});

export const initLoadGame = createAsyncThunk("game/initLoadGame", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return;
});

export const { setGameMode } = gameSlice.actions;

export default gameSlice.reducer;
