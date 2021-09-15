import React, { useState } from "react";
import "./Switch.less";

interface SwitchProps {
  onChange: Function;
  defaultChecked?: Boolean;
}

const Switch: React.FunctionComponent<SwitchProps> = props => {
  const [status, setStatus] = useState(props.defaultChecked ? false : true);
  const switchOnclick = () => {
    setStatus(!status);
    props.onChange(status);
  };
  return (
    <>
      <div
        className={`cui-switch ${status ? "" : "yes"}`}
        onClick={() => switchOnclick()}></div>
    </>
  );
};

export default Switch;
