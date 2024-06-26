import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./state/store.ts";
import HelpScreen from "./components/HelpScreen/HelpScreen.tsx";
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

  useEffect(() => {
    // dispatch load game mode data. and return true when promise completes.
    // Change loading state when complete too.
  }, []);

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
