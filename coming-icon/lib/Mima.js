import * as React from "react";

const SvgMima = ({ title, titleId, ...props }) => (
  <svg
    className="mima_svg__icon"
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
      d="M737.142 359.404A226.934 226.934 0 0 0 512.276 161.3 227.25 227.25 0 0 0 287.37 359.207a86.646 86.646 0 0 0-81.526 86.253V764.08a86.823 86.823 0 0 0 86.646 86.843H731.43a86.98 86.98 0 0 0 86.843-86.843V445.46a86.646 86.646 0 0 0-81.132-86.056zM551.444 663.06a39.385 39.385 0 0 1-39.385 39.384 39.247 39.247 0 0 1-39.385-39.384V546.48a39.385 39.385 0 0 1 39.385-39.384 39.503 39.503 0 0 1 39.385 39.384zm-184.32-304.246a148.263 148.263 0 0 1 145.152-118.745 148.106 148.106 0 0 1 145.112 118.745z"
    />
  </svg>
);

export default SvgMima;
