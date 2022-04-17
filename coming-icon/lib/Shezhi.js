import * as React from "react";

const SvgShezhi = ({ title, titleId, ...props }) => (
  <svg
    className="shezhi_svg__icon"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#333"
      d="m773.868 289.103-199.68-115.2a133.297 133.297 0 0 0-124.238 0l-199.7 115.2a133.632 133.632 0 0 0-62.228 107.52V627.22a133.691 133.691 0 0 0 62.228 107.717l199.7 115.2a125.302 125.302 0 0 0 62.01 15.36 126.188 126.188 0 0 0 62.228-15.36l199.68-115.2A133.435 133.435 0 0 0 835.9 627.22V396.623a133.376 133.376 0 0 0-62.03-107.52zM509.401 613.04a104.153 104.153 0 0 1-104.153-103.975A104.153 104.153 0 0 1 509.401 405.09a104.133 104.133 0 0 1 103.975 103.976A104.133 104.133 0 0 1 509.401 613.04z"
    />
  </svg>
);

export default SvgShezhi;
