import { ReactElement } from 'react';

const renderColumns = (
  currentRow: number,
  colCount: number,
  colours: string[],
  darkColours: string[],
  currentPatternIndex: number,
  currentPattern: number[]
) => {
  const elementRowArray: ReactElement[] = [];
  for (let j = currentRow * colCount; j < colCount * (currentRow + 1); j++) {
    elementRowArray.push(
      <div
        key={`col-${j}`}
        className={'patternCol pulsate'}
        style={{
          border: `4px solid #${darkColours[currentPatternIndex]}`,
          background: `${currentPattern[j] ? '#' + colours[currentPatternIndex] : '#f7f7f7'}`,
        }}
      />
    );
  }

  return elementRowArray;
};

export const renderGrid = (
  rowCount: number,
  colCount: number,
  colours: string[],
  darkColours: string[],
  currentPatternIndex: number,
  currentPattern: number[]
) => {
  const elementGridArray: ReactElement[] = [];
  for (let i = 0; i < rowCount; i++) {
    elementGridArray.push(
      <div key={`row-${i}`} className={'patternRow'}>
        {...renderColumns(
          i,
          colCount,
          colours,
          darkColours,
          currentPatternIndex,
          currentPattern
        )}
      </div>
    );
  }
  return elementGridArray;
};
