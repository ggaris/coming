Switch 组件是一个用来管理状态的组件

- 我们会帮助你管理好状态，你可以通过传递一个函数来接受状态值
- 可以通过 defaultChecked 来定义初始初始状态

```typeScript
onChange: Function
defaultChecked?: Boolean
```

```jsx
import React, { useState } from "react";
import { Switch } from "coming";
const ButtonDemo = () => {
  const onChange = status => {
    console.log(status);
  };
  return <Switch onChange={onChange} defaultChecked={true} />;
};

export default ButtonDemo;
```
