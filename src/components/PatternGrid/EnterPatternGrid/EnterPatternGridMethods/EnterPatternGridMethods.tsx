import { ReactElement } from 'react';
import { style } from 'glamor';

const renderEnterColumns = (
  currentRow: number,
  colCount: number,
  colours: string[],
  darkColours: string[],
  patternToMatchIndex: number,
  playerPattern: number[],
  onClickMethod: (index: number) => void,
  wonGame: boolean
) => {
  const elementRowArray: ReactElement[] = [];
  for (let j = currentRow * colCount; j < colCount * (currentRow + 1); j++) {
    if (wonGame) {
      elementRowArray.push(
        <div
          key={`col-${j}`}
          className={'enterPatternCol enterPatternColWinAnimation'}
          {...style({
            border: `4px solid #${darkColours[patternToMatchIndex]}`,
            background: `${playerPattern[j] ? '#' + colours[patternToMatchIndex] : '#f7f7f7'}`,
          })}
        />
      );
    } else {
      elementRowArray.push(
        <div
          key={`col-${j}`}
          className={'enterPatternCol'}
          onClick={() => onClickMethod(j)}
          {...style({
            border: `4px solid #${darkColours[patternToMatchIndex]}`,
            background: `${playerPattern[j] ? '#' + colours[patternToMatchIndex] : '#f7f7f7'}`,
            // ":hover": {
            //   background: `#${colours[patternToMatchIndex]}${playerPattern[j] ? "FF" : "50"}`,
            //   cursor: "pointer",
            // },
          })}
        />
      );
    }
  }

  return elementRowArray;
};

export const renderEnterGrid = (
  rowCount: number,
  colCount: number,
  colours: string[],
  darkColours: string[],
  patternToMatchIndex: number,
  playerPattern: number[],
  onClickMethod: (index: number) => void,
  wonGame: boolean
) => {
  const elementGridArray: ReactElement[] = [];
  for (let i = 0; i < rowCount; i++) {
    elementGridArray.push(
      <div
        key={`row-${i}`}
        className={`enterPatternRow ${wonGame ? 'enterPatternRowWinAnimation' : ''}`}
      >
        {...renderEnterColumns(
          i,
          colCount,
          colours,
          darkColours,
          patternToMatchIndex,
          playerPattern,
          onClickMethod,
          wonGame
        )}
      </div>
    );
  }
  return elementGridArray;
};
