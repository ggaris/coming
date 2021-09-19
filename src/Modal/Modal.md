```tsx
import React, { useState } from "react";
import { Modal, Button } from "coming";
const ModalDemo: React.FC = () => {
  const { visible, setVisible } = useState(false);
  return (
    <>
      <Button
        onClick={visible => {
          console.log(this);
        }}>
        测试
      </Button>
      <Modal visible={false}></Modal>
    </>
  );
};

export default ModalDemo;
```
