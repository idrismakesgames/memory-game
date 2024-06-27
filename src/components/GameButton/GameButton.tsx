import GameButtonType from "./GameButton.types.ts";
import classes from "./GameButton.module.css";

function GameButton(props: GameButtonType) {
  return (
    <div
      onClick={props.onClickMethod}
      className={`${classes.gameButton} ${props.disabled === true && classes.buttonDisabled}`}
    >
      <div className={classes.iconContainer}>
        <props.buttonIcon height={props.height} />
      </div>
      <div className={classes.textContainer}>{props.buttonText}</div>
    </div>
  );
}

export default GameButton;
