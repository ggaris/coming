import React from "react";
import { PropsBase } from "src/Types/globalTypes";
import SvgDemo from "../../Public/demo.svg";

interface IconProps extends PropsBase {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return (
    <span>
      <SvgDemo />
    </span>
  );
};

export default Icon;
