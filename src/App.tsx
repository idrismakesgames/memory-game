import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store.ts";
import * as gameSliceActions from "./state/game/gameSlice.ts";
import "./App.css";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator.tsx";
import { GamePlayModes } from "./state/game/gameSlice.types.ts";
import HelpScreen from "./components/HelpScreen/HelpScreen.tsx";

function App() {
  const gameName = useSelector((state: RootState) => state.game.gameName);
  const gamePlayMode = useSelector(
    (state: RootState) => state.game.gamePlayMode,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch load game mode data. and return true when promise completes.
    dispatch(gameSliceActions.initLoadGame()).then(() => {
      console.log("is this working?");
    });
  }, [dispatch]);

  return (
    <div className="app alegreya-sans-sc-medium">
      <div className="app-header alegreya-sans-sc-bold">{gameName}</div>
      {gamePlayMode === GamePlayModes.gameLoading && (
        <LoadingIndicator text={"Loading..."} />
      )}
      {gamePlayMode === GamePlayModes.tutorialShowing && <HelpScreen />}
      {gamePlayMode === GamePlayModes.difficultySelect && (
        <div>Select Difficulty</div>
      )}
      {gamePlayMode === GamePlayModes.showingPatterns && (
        <>
          <div className="app-header alegreya-sans-sc-bold">{gameName}</div>
          <div className="difficulties">Play game soon</div>
        </>
      )}
    </div>
  );
}

export default App;
