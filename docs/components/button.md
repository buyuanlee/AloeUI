---
title:Button-按钮
---
# Button-按钮
**实例展示**

<ClientOnly>
<ButtonDemos></ButtonDemos>
</ClientOnly>

**示例代码**

```html
<aloe-button >默认按钮</aloe-button>
<aloe-button danger>危险按钮</aloe-button>
<aloe-button warning>警告按钮</aloe-button>
<aloe-button info>信息按钮</aloe-button>
<aloe-button success>成功按钮</aloe-button>
<aloe-button icon="good">点赞</aloe-button>
<aloe-button icon="setting" icon-position="right">设置</aloe-button>
<aloe-button icon="download" loading>点击加载</aloe-button>
```

**Attributes**
:::tip
当设置loading时，默认不展示，点击出现loading状态，再次点击消失
:::
|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|danger  | 危险按钮| Boolean |    --    |   false   |
|success | 成功按钮| Boolean |    --    |   false   |
|info    | 信息按钮| Boolean |    --    |   false   |
|warning | 警告按钮| Boolean |    --    |   false   |
|position | 图标位置| String |left,right|   left    |
|loading | 加载中| Boolean   |   ----   |   false   |

