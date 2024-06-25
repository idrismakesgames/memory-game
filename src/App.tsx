import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store.ts";
import {
  changeName,
  changeNameAsync,
  setGameLoading,
} from "./state/game/gameSlice.ts";

function App() {
  // const [count, setCount] = useState(0);
  const gameName = useSelector((state: RootState) => state.game.gameName);
  const isLoading = useSelector((state: RootState) => state.game.gameLoading);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="app">
      <div className="app-header alegreya-sans-sc-bold">{gameName}</div>
      <div className="help-text"></div>
      <div className="card">
        <button onClick={() => dispatch(setGameLoading())}>
          Loading is: {isLoading.toString()}
        </button>
        <button onClick={() => dispatch(changeName("Testing Name Change"))}>
          Change name
        </button>
        <button onClick={() => dispatch(changeNameAsync("Change  Name in 1"))}>
          Async Action Setup
        </button>
      </div>
    </div>
  );
}

export default App;
