import React from 'react'
import './Modal.less'
interface ModalProps extends InheritableClassName {
    visible:true
}
const Modal:React.FunctionComponent<ModalProps> = (props)=>{
    return (
       <>
        {
            props.visible ? <div className={`cui-dialog ${props.className}`}>
                333
            </div>: null
        }
       </>
    )
}
export default Modal
