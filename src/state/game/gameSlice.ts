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
    setGameLoading: (state) => {
      state.gameLoading = !state.gameLoading;
    },
    setShowHelpText: (state, action: PayloadAction<boolean>) => {
      state.showHelpText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeNameAsync.pending, () => {
      console.log("changeNameAsync.pending");
    });
    builder.addCase(
      changeNameAsync.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.gameName = action.payload;
      },
    );
  },
});

export const changeNameAsync = createAsyncThunk(
  "game/changeNameAsync",
  async (newName: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return newName;
  },
);

export const { setGameLoading, setShowHelpText } = gameSlice.actions;

export default gameSlice.reducer;
