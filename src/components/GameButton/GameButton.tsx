import GameButtonType from "./GameButton.types.ts";
import classes from "./GameButton.module.css";

const GameButton = (props: GameButtonType) => {
  return (
    <div
      onClick={() => (!props.disabled ? props.onClickMethod() : null)}
      className={`${classes.gameButton} ${props.disabled === true && classes.buttonDisabled}`}
    >
      <div className={classes.iconContainer}>
        <props.buttonIcon height={props.height} />
      </div>
      <div className={classes.textContainer}>{props.buttonText}</div>
      <div className={classes.subTextContainer}>{props.buttonSubText}</div>
    </div>
  );
};

export default GameButton;
