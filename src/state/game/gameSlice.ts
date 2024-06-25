import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "./gameSlice.types.ts";

const initialState: GameState = {
  gameName: "Memory Game",
  gameLoading: false,
  gameModes: null,
  showHelpText: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.gameName = action.payload;
    },
    setGameLoading: (state) => {
      state.gameLoading = !state.gameLoading;
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

export const { changeName, setGameLoading } = gameSlice.actions;

export default gameSlice.reducer;
