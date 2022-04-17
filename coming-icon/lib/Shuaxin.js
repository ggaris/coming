import * as React from "react";

const SvgShuaxin = ({ title, titleId, ...props }) => (
  <svg
    className="shuaxin_svg__icon"
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
      d="M797.538 693.74h-16.206A325.593 325.593 0 0 0 512 185.088a45.292 45.292 0 0 0 0 90.585 234.91 234.91 0 0 1 200.862 357.021V607.98a45.292 45.292 0 1 0-90.585 0v131.053a45.292 45.292 0 0 0 45.292 45.292h129.97a45.292 45.292 0 1 0 0-90.585zM512 748.347A235.362 235.362 0 0 1 276.913 513.26a232.9 232.9 0 0 1 34.206-121.836v18.471a45.292 45.292 0 1 0 90.584 0V278.863a45.292 45.292 0 0 0-45.292-45.293h-129.97a45.292 45.292 0 0 0 0 90.585H247.1A325.396 325.396 0 0 0 511.98 838.932a45.292 45.292 0 1 0 0-90.585z"
    />
  </svg>
);

export default SvgShuaxin;
