Switch 组件是一个用来管理状态的组件

- 我们会帮助你管理好状态，你可以通过传递一个函数来接受状态值
- 可以通过 defaultChecked 来定义初始初始状态

```typeScript
onChange: Function
defaultChecked?: Boolean
```

```jsx
import React from "react";
import { Switch } from "coming";
const SwitchDemo = () => {
  const onChange = (status) => {
    // 可以通过 status 获取状态
  };
  return <Switch onChange={onChange} defaultChecked={true} />;
};

export default SwitchDemo;
```
