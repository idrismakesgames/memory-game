import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store.ts";
import * as gameSliceActions from "./state/game/gameSlice.ts";
import "./App.css";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator.tsx";
import { GamePlayModes } from "./state/game/gameSlice.types.ts";
import HelpScreen from "./containers/HelpScreen/HelpScreen.tsx";
import DifficultySelect from "./containers/DifficultySelect/DifficultySelect.tsx";
import ShowPatterns from "./containers/ShowPatterns/ShowPatterns.tsx";

function App() {
  const gameName = useSelector((state: RootState) => state.game.gameName);
  const gamePlayMode = useSelector(
    (state: RootState) => state.game.gamePlayMode,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(gameSliceActions.initLoadGame());
  }, [dispatch]);

  return (
    <div className="app alegreya-sans-sc-medium">
      <div className="app-header alegreya-sans-sc-bold">{gameName}</div>
      {gamePlayMode === GamePlayModes.gameLoading && (
        <LoadingIndicator text={"Loading..."} />
      )}
      {gamePlayMode === GamePlayModes.tutorialShowing && <HelpScreen />}
      {gamePlayMode === GamePlayModes.difficultySelect && <DifficultySelect />}
      {(gamePlayMode === GamePlayModes.showingPatterns ||
        gamePlayMode === GamePlayModes.enteringPattern) && <ShowPatterns />}
    </div>
  );
}

export default App;
