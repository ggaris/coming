import React from "react";
import "./Avatar.less";

type Size = "large" | "small" | "default";
interface AvatarProps extends InheritableClassName {
  size?: Size;
}
const Avatar: React.FunctionComponent<AvatarProps> = props => {
  return (
    <div
      className={`cui-avatar ${props.className} ${
        props.size ? props.size : ""
      }`}>
      asgasgasg
    </div>
  );
};
export default Avatar;
