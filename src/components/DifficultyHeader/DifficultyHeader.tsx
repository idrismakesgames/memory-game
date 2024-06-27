import classes from "./DifficultyHeader.module.css";

interface DifficultyHeaderProps {
  restartGame: (difficulty: string) => void;
  difficultySelected: string;
}

function DifficultyHeader(props: DifficultyHeaderProps) {
  return (
    <div className={classes.difficultiesContainer}>
      <div
        onClick={() => props.restartGame("easy")}
        className={`${classes.difficultyOption} ${props.difficultySelected === "easy" && classes.isSelected}`}
      >
        Easy
      </div>
      <div
        onClick={() => props.restartGame("medium")}
        className={`${classes.difficultyOption} ${props.difficultySelected === "medium" && classes.isSelected}`}
      >
        Medium
      </div>
      <div
        onClick={() => props.restartGame("hard")}
        className={`${classes.difficultyOption} ${props.difficultySelected === "hard" && classes.isSelected}`}
      >
        Hard
      </div>
    </div>
  );
}

export default DifficultyHeader;
