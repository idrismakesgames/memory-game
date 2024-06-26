import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store.ts";
import * as gameSliceActions from "./state/game/gameSlice.ts";
import HelpScreen from "./components/HelpScreen/HelpScreen.tsx";
import "./App.css";

function App() {
  const gameName = useSelector((state: RootState) => state.game.gameName);
  const dispatch = useDispatch<AppDispatch>();
  const isGameLoading = useSelector(
    (state: RootState) => state.game.gameLoading,
  );
  const showHelpText = useSelector(
    (state: RootState) => state.game.showHelpText,
  );

  return (
    <div className="app alegreya-sans-sc-medium">
      <div className="app-header alegreya-sans-sc-bold">{gameName}</div>
      {showHelpText && <HelpScreen />}
      {!showHelpText && (
        <div className="card">
          <button onClick={() => dispatch(gameSliceActions.setGameLoading())}>
            Loading is: {isGameLoading.toString()}
          </button>
          <button
            onClick={() =>
              dispatch(gameSliceActions.changeName("Testing Name Change"))
            }
          >
            Change name
          </button>
          <button
            onClick={() =>
              dispatch(gameSliceActions.changeNameAsync("Change  Name in 1"))
            }
          >
            Async Action Setup
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
