import * as React from "react";

const SvgShanchu = ({ title, titleId, ...props }) => (
  <svg
    className="shanchu_svg__icon"
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
      d="M746.437 394.26H264.172a19.85 19.85 0 0 0-19.889 19.889v343.828a87.847 87.847 0 0 0 88.438 86.843h345.974a87.69 87.69 0 0 0 87.631-87.631v-343.04a19.83 19.83 0 0 0-19.89-19.89zM610.974 669.558a39.266 39.266 0 0 1 0 55.532 39.385 39.385 0 0 1-27.786 11.619 40.074 40.074 0 0 1-27.963-11.619l-49.822-49.821-50.018 49.821a39.188 39.188 0 0 1-27.767 11.619 39.385 39.385 0 0 1-27.963-11.619 39.266 39.266 0 0 1 0-55.532l50.019-50.018-50.019-50.019a39.503 39.503 0 0 1 0-55.729 39.385 39.385 0 0 1 55.73 0l50.018 50.018 49.822-50.018a39.385 39.385 0 0 1 55.749 0 39.503 39.503 0 0 1 0 55.73l-49.842 50.018zM806.715 326.124a39.266 39.266 0 0 0 39.267-39.266 39.385 39.385 0 0 0-39.267-39.385H204.012a39.385 39.385 0 0 0-39.286 39.385 39.385 39.385 0 0 0 39.286 39.266h588.15z"
    />
    <path
      fill="#333"
      d="M614.44 210.058a52.677 52.677 0 0 0-52.599-52.618H448.886a52.657 52.657 0 0 0-52.598 52.618s.138 50.61.197 51.2h217.757c.06-.59.197-51.2.197-51.2z"
    />
  </svg>
);

export default SvgShanchu;