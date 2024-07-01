import React from "react";

export default interface GameButtonType {
  buttonIcon: React.ElementType;
  buttonText: string;
  buttonSubText?: string;
  onClickMethod: () => void;
  disabled?: boolean;
  height?: number;
}
