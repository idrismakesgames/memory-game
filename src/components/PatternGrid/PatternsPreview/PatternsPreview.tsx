import { GamePatterns } from "../../../state/game/gameSlice.types.ts";
import classes from "./PatternsPreview.module.css";

interface PatternPreviewProps {
  gamePatterns: GamePatterns | null;
  patternsLeft: number | undefined;
  entering?: boolean;
}
const PatternsPreview = (props: PatternPreviewProps) => {
  return (
    <div className={classes.patternPreview}>
      {props.gamePatterns !== null &&
        props.gamePatterns.chosenColours.map((el, i) => (
          <div
            key={i}
            style={{
              background: `#${el}${props.patternsLeft !== undefined && props.patternsLeft === i ? "dd" : "00"}`,
              border: `2px solid #${props.entering ? "C2CDDB50" : props.gamePatterns?.chosenDarkColours[i]}`,
            }}
            className={classes.patternPreviewBox}
          ></div>
        ))}
    </div>
  );
};

export default PatternsPreview;
