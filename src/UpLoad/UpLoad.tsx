import React, { useRef, useState } from "react";
import "./UpLoad.less";
interface UpLoadProps extends InheritableClassName {
  multiple?: boolean;
}
const UpLoad: React.FunctionComponent<UpLoadProps> = props => {
  const InputEl = useRef<HTMLInputElement>(null);
  const [Files, setFiles] = useState<Array<File>>();
  const upLoad = () => {
    InputEl.current!.click();
  };
  const upFiles = () => {
    if (InputEl.current!.files !== null) {
      let files = [];
      let len = InputEl.current!.files.length;
      for (let i = 0; i < len; i++) {
        files.push(InputEl!.current!.files[i]);
      }
      setFiles(files);
    }
  };

  return (
    <>
      <div className='cui-upload'>
        {Files?.map(e => {
          return (
            <div key={e.name} className='cui-upload-show'>
              <img src={URL.createObjectURL(e)} />
              <span>{e.name}</span>
            </div>
          );
        })}
        <div
          className={`cui-upload-button ${props.className}`}
          onClick={() => upLoad()}></div>
      </div>
      <input
        className='cui-upload-input'
        type='file'
        accept='image/*'
        multiple={props.multiple}
        onChange={() => upFiles()}
        ref={InputEl}
      />
    </>
  );
};
export default UpLoad;
