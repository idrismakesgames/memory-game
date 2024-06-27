import { ReactElement } from "react";

const renderColumns = (
  currentRow: number,
  colCount: number,
  colours: string[],
  currentPatternIndex: number,
  currentPattern: number[],
) => {
  const elementRowArray: ReactElement[] = [];
  for (let j = currentRow * colCount; j < colCount * (currentRow + 1); j++) {
    elementRowArray.push(
      <div
        key={`col-${j}`}
        className={"patternCol"}
        style={{
          border: `3px solid #${colours[currentPatternIndex]}`,
          background: `${currentPattern[j] ? "#" + colours[currentPatternIndex] : "#232758"}`,
        }}
      />,
    );
  }

  return elementRowArray;
};

export const renderGrid = (
  rowCount: number,
  colCount: number,
  colours: string[],
  currentPatternIndex: number,
  currentPattern: number[],
) => {
  const elementGridArray: ReactElement[] = [];
  for (let i = 0; i < rowCount; i++) {
    elementGridArray.push(
      <div key={`row-${i}`} className={"patternRow"}>
        {...renderColumns(
          i,
          colCount,
          colours,
          currentPatternIndex,
          currentPattern,
        )}
      </div>,
    );
  }
  return elementGridArray;
};
