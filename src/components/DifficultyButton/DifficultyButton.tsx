import React, { ElementType } from "react";

interface DifficultyButtonType {
  difficultyName: string;
  difficultyElementSelected: ElementType;
  difficultyElementUnselected: ElementType;
  selectedDifficulty: string;
  hoveredDifficulty: string;
}

function DifficultyButton(props: DifficultyButtonType) {
  return (
    <>
      {props.hoveredDifficulty === props.difficultyName ||
      props.selectedDifficulty === props.difficultyName ? (
        <props.difficultyElementSelected />
      ) : (
        <props.difficultyElementUnselected />
      )}
    </>
  );
}

export default DifficultyButton;
