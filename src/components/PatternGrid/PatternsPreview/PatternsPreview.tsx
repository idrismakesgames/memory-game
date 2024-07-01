import { GamePatterns } from "../../../state/game/gameSlice.types.ts";
import classes from "./PatternsPreview.module.css";

interface PatternPreviewProps {
  gamePatterns: GamePatterns | null;
  patternsLeft: number | undefined;
}
const PatternsPreview = (props: PatternPreviewProps) => {
  return (
    <div className={classes.patternPreview}>
      {props.gamePatterns !== null &&
        props.gamePatterns.chosenColours.map((el, i) => (
          <div
            key={i}
            style={{
              background: `#${el}${props.patternsLeft !== undefined && props.patternsLeft === i ? "bb" : "00"}`,
              border: `2px solid #${props.gamePatterns?.chosenDarkColours[i]}`,
            }}
            className={classes.patternPreviewBox}
          ></div>
        ))}
    </div>
  );
};

export default PatternsPreview;
