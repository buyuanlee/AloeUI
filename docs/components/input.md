---
title:Input-输入框
---
# Input-输入框
提供了三种基本状态的Input样式，默认状态、不可用状态以及警告状态
**实例展示**

<ClientOnly>
<InputDemos></InputDemos>
</ClientOnly>

**示例代码**

```html
<aloe-input value="默认输入框"></aloe-input>
<aloe-input value="不可用输入框" disabled></aloe-input>
<aloe-input warning="请检查输入格式"></aloe-input>
```

**Attributes**
:::tip
与Vue一样，支持双向绑定，但是不要忘记在`data()`中设置绑定数据
:::
|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|disabled| 不可用状态| Boolean |    --    |   false   |
|warning | 警告状态| Boolean |    --    |   false   |
