```tsx
import React, { useState } from "react";
import { Modal, Button } from "coming";
const ModalDemo: React.FC = () => {
  const { visible, setVisible } = useState(true);
  return (
    <>
      <Modal visible={visible}></Modal>
    </>
  );
};

export default ModalDemo;
```
