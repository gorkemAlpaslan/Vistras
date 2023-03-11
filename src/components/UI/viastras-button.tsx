import React from "react";
import style from "./vistras-button.module.sass";

const VistrasButton: React.FC<{
  onClick: any;
  text: string;
  disabled: boolean;
}> = (props) => {
  return (
    <button
      className={style.vistrasButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default VistrasButton;
