import React from "react";
import "./UpLoad.less";
interface UpLoadProps extends InheritableClassName {}
const UpLoad: React.FunctionComponent<UpLoadProps> = props => {
  return (
    <>
      <div className={`cui-upload ${props.className}`}></div>
      <input className='cui-upload-input' type='file' accept='image/*' />
    </>
  );
};
export default UpLoad;
