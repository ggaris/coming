import React from "react";
import "./Avatar.less";

type Size = "large" | "small" | "default"; //头像大小
type Shape = "circle" | "square"; // 头像样式
type Src = string; // 头像引用地址
interface AvatarProps extends InheritableClassName {
  size?: Size;
  shape?: Shape;
  src?: Src;
}
const Avatar: React.FunctionComponent<AvatarProps> = props => {
  return (
    <div
      className={`cui-avatar ${props.className} ${
        props.size ? props.size : ""
      }`}>
      {props.src ? <img src={props.src}></img> : null}
    </div>
  );
};
export default Avatar;
