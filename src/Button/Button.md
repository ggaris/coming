Demo:

- 可以用过传递 type 来定义按钮的样式

  ```bash
   type: "default" | "primary" | "danger" | "link";
  ```

  ```bash
   size: "medium" | "large" | "small";

  ```

- 可以通过传递 size 来定义按钮的大小


```jsx
import React from "react";
import { Button } from 'coming';
import "./Button.md.less";
const ButtonDemo = () => {
  return (
    <div className='box'>
      <Button type='default'>默认按钮</Button>
      <Button type='primary'>主要按钮</Button>
      <Button type='danger'>危险按钮</Button>
      <Button type='link'>链接按钮</Button>
      <hr />
      <Button type='default' size='large'>
        大个按钮
      </Button>
      <Button type='default' size='medium'>
        默认按钮
      </Button>
      <Button type='default' size='small'>
        小个按钮
      </Button>
    </div>
  );
};

export default ButtonDemo;
```