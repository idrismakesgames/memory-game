import React from "react";

export default interface GameButtonType {
  buttonIcon: React.ElementType;
  buttonText: string;
  onClickMethod: () => void;
  height?: number;
}