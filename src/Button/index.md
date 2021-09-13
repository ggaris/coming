Demo:

```tsx
import React from "react";
import { Button } from "coming";

const ButtonDemo = () => {
  return (
    <div>
      <Button type='primary'>标准按钮</Button>
      <hr />

      <Button type='default'>默认按钮</Button>
      <hr />
      <Button type='danger'>无边框按钮</Button>
      <hr />
      <Button type='link'>这是透明按钮</Button>
    </div>
  );
};

export default ButtonDemo;
```
