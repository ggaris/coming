import React from "react";
import SvgDemo from "../../Public/mone.svg";

interface IconProps {
  name?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref="SvgDemo"></use>
      </svg>
    </span>
  );
};

export default Icon;
