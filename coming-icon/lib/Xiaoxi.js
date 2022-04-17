import * as React from "react";

const SvgXiaoxi = ({ title, titleId, ...props }) => (
  <svg
    className="xiaoxi_svg__icon"
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
      d="M818.846 298.3a11.815 11.815 0 0 0 2.717-15.617 89.56 89.56 0 0 0-75.796-41.984H278.272a90.033 90.033 0 0 0-75.874 41.945 11.815 11.815 0 0 0 2.717 15.655l296.566 230.814a16.7 16.7 0 0 0 20.5 0zM567.414 587.52a90.722 90.722 0 0 1-110.868 0l-246.35-191.626a13.785 13.785 0 0 0-22.253 10.89v285.302a91.274 91.274 0 0 0 26.191 64.394 89.226 89.226 0 0 0 64 26.782l467.692-.197a90.703 90.703 0 0 0 90.21-90.782V406.745a13.785 13.785 0 0 0-22.251-10.89z"
    />
  </svg>
);

export default SvgXiaoxi;
