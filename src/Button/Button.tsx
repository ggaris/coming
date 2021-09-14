import getClassName from "@/common/utils/getClassName";
import React from "react";
import "./Button.less";
type Mold = "default" | "primary" | "danger" | "link";
type Size = "medium" | "large" | "small";
interface ButtonProps {
  type?: Mold;
  size?: Size;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  let sizeList = ["medium", "large", "small"];
  let classNameList = ["default", "primary", "danger", "link"];

  return (
    <>
      <button
        className={`cui-button ${getClassName(
          props.type,
          classNameList,
        )} ${getClassName(props.size, sizeList)}`}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
