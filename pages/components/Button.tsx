import React from "react";

interface ButtonType {
  children: string;
  buttonClass: string;
  disabled: boolean;
  handleOnClick: () => void;
}

export default function Button({
  children,
  buttonClass,
  disabled,
  handleOnClick,
}: ButtonType) {
  return (
    <button
      className={`${buttonClass} rounded-md`}
      disabled={disabled}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
