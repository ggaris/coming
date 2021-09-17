```tsx
import React,{ useState } from 'react';
import { Modal,Button } from 'coming';
const ModalDemo:React.FC = ()=>{
    // const {visible,setVisible} = useState(false)
    return (
        <>  
            <Button onClick={()=>console.log(333)}>测试</Button>
            <Modal visible={false}></Modal>
        </>
    )
}

export default ModalDemo
```