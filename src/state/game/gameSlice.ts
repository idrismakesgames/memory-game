import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  gameName: string;
  isLoading: boolean;
}

const initialState: GameState = {
  gameName: "Memory Game",
  isLoading: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.gameName = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
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

export const { changeName, setLoading } = gameSlice.actions;

export default gameSlice.reducer;
