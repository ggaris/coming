import React from "react";
import SvgDemo from "../../Public/demo.svg";

interface IconProps {
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
