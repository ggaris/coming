import React from "react";
import "./index.less";
type Mold = "default" | "primary" | "danger" | "link";
type Size = "medium" | "large" | "small";
interface ButtonProps {
  type?: Mold;
  size?: Size;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  let className = "default";
  const getClass = (type: string | undefined): string => {
    switch (type) {
      case "primary":
        className = "primary";
        break;
      case "default":
        className = "default";
        break;
      case "danger":
        className = "danger";
        break;
      case "link":
        className = "link";
        break;
      default:
        new Error("没有这个type");
    }

    return className;
  };

  return (
    <>
      <button className={`cui-button ${getClass(props.type)}`}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
