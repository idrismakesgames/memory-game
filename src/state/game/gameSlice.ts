import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "./gameSlice.types.ts";

const initialState: GameState = {
  gameName: "Memory Game",
  gameLoading: true,
  showHelpText: true,
  gameModes: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setShowHelpText: (state, action: PayloadAction<boolean>) => {
      state.showHelpText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initLoadGame.pending, () => {
      console.log("Loading Game");
    });
    builder.addCase(initLoadGame.fulfilled, (state) => {
      state.gameLoading = false;
    });
  },
});

export const initLoadGame = createAsyncThunk("game/initLoadGame", async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return;
});

export const { setShowHelpText } = gameSlice.actions;

export default gameSlice.reducer;
