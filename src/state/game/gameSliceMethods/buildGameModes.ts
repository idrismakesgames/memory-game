import { GameMode } from "../gameSlice.types.ts";

export const buildGameModes = (responseData: string) => {
  const data: GameMode[] = JSON.parse(responseData);
  return data;
};
