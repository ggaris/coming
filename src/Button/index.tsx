import React from "react";
import "./index.less";
type Mold = "primary" | "dashed";

interface ButtonProps {
  type: Mold;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  return (
    <>
      <button className='jt-button'>{props.children}</button>
    </>
  );
};

export default Button;
