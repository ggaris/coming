import * as React from "react";

const SvgJifen = ({ title, titleId, ...props }) => (
  <svg
    className="jifen_svg__icon"
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
      d="m875.815 449.674-112.03-239.459a39.62 39.62 0 0 0-35.662-22.646h-432.03a39.148 39.148 0 0 0-35.662 22.646L148.185 449.674a39.483 39.483 0 0 0 7.483 44.11l328.074 339.3a39.64 39.64 0 0 0 28.356 12.011 38.873 38.873 0 0 0 28.16-12.012L868.53 493.785a39.7 39.7 0 0 0 7.286-44.111zm-360.96 204.012a39.759 39.759 0 0 1-27.372 11.028 39.05 39.05 0 0 1-28.357-12.012L330.93 519.975a39.64 39.64 0 0 1 .985-55.729 39.385 39.385 0 0 1 55.73.985L515.84 597.957a39.385 39.385 0 0 1-1.024 55.73z"
    />
  </svg>
);

export default SvgJifen;
