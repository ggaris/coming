## Demo
```jsx
import React from 'react'
import { Card } from 'coming'

const CardDemo = ()=>{
    return (
        <Card className="test" title="<h5>支持传入html标签哟</h5>">
            <p>这是内容</p>
            <div>这是内容</div>
        </Card>
    )
}

export default CardDemo
```

## API
|参数 |说明|类型|可选值|默认值|
|:---: |:---:|:---:|:---:|:---:|
|title |标题文本(支持传入富文本)|`string`｜`undefind`|-|-|