import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store.ts";
import HelpScreen from "./components/HelpScreen/HelpScreen.tsx";
import * as gameSliceActions from "./state/game/gameSlice.ts";
import "./App.css";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator.tsx";

function App() {
  const gameName = useSelector((state: RootState) => state.game.gameName);
  const isGameLoading = useSelector(
    (state: RootState) => state.game.gameLoading,
  );
  const showHelpText = useSelector(
    (state: RootState) => state.game.showHelpText,
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
      {!isGameLoading && (
        <>
          <div className="app-header alegreya-sans-sc-bold">{gameName}</div>
          {showHelpText && <HelpScreen />}
          {!showHelpText && <div className="difficulties">Play game soon</div>}
        </>
      )}
      {isGameLoading && <LoadingIndicator text={"Loading..."} />}
    </div>
  );
}

export default App;
