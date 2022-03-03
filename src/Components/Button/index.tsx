import React, { ReactNode } from "react";
import styles from "./Button.css";
import classnames from "../../Utils/ClassNames";
type Mold = "default" | "primary" | "danger" | "link";
type Size = "medium" | "large" | "small";
/** Button的可支持的参数类型
 * type | size | onClick | className | disabled | icon | loading
 */
export interface ButtonProps {
  /**
   * @type  按钮样式
   * @size 按钮尺寸
   * @onClick 点击事件
   * @className 自定义 class name
   * @disabled 禁用状态
   * @icon 图标
   * @loading 加载状态
   */
  type: Mold;
  size?: Size;
  onClick?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      className={classnames(styles, ["default", "small"])}
      onClick={() => (props.onClick === undefined ? null : props.onClick("333"))}
    >
      {props.children}
    </button>
  );
};

export default Button;
