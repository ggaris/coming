import * as React from "react";

const SvgDaohang = ({ title, titleId, ...props }) => (
  <svg
    className="daohang_svg__icon"
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
      d="M270.77 365.883h482.46a53.17 53.17 0 0 0 0-106.338H270.77a53.17 53.17 0 0 0 0 106.338zM753.23 658.176H270.77a53.17 53.17 0 1 0 0 106.338h482.46a53.17 53.17 0 0 0 0-106.338zM753.23 458.83H270.77a53.17 53.17 0 1 0 0 106.34h482.46a53.17 53.17 0 0 0 0-106.34z"
    />
  </svg>
);

export default SvgDaohang;
