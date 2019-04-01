---
title:Grid-网格系统
---
# Grid-网格系统
通过100分栏，可以迅速的创建各种比例的布局

## 基础结构
:::tip
不设置`span`时，将按照等比例划分
:::
**实例展示**

<ClientOnly>
<BasicGridDemos></BasicGridDemos>
</ClientOnly>

**示例代码**

```html
<!--一栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
</aloe-row>
<!--两栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
</aloe-row>
<!--三栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
    <aloe-col><div class="col-content dark"></div></aloe-col>
</aloe-row>
<!--四栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
</aloe-row>
```

## 比例结构
:::tip
通过`<aloe-col>`的`span`属性，将`<aloe-col>`按照固定比例创建
:::
**实例展示**

<ClientOnly>
<ScaleGridDemos></ScaleGridDemos>
</ClientOnly>

**示例代码**
```html
<aloe-row>
    <aloe-col span="30"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="70"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="50"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="20"><div class="col-content light"></div></aloe-col>
    <aloe-col span="30"><div class="col-content dark"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="10"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="15"><div class="col-content light"></div></aloe-col>
    <aloe-col span="30"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="45"><div class="col-content light"></div></aloe-col>
</aloe-row>
```

## 间隔结构
:::tip
通过`<aloe-row>`的`gutter`属性，设置`<aloe-col>`的间隔
:::

**实例展示**

<ClientOnly>
<GutterGridDemos></GutterGridDemos>
</ClientOnly>

**示例代码**

```html
<aloe-row gutter="20">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row gutter="10">
    <aloe-col span="20"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="30"><div class="col-content light"></div></aloe-col>
    <aloe-col span="20"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="30"><div class="col-content light"></div></aloe-col>
</aloe-row>

```

## 偏移结构
:::tip
通过`<aloe-col>`的`offset`属性，设置`<aloe-col>`见的间隔
:::

**实例展示**

<ClientOnly>
<OffsetGridDemos></OffsetGridDemos>
</ClientOnly>

**示例代码**

```html
<aloe-row>
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25" offset="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="20" offset="20"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="30" offset="30"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="50" offset="25"><div class="col-content dark"></div></aloe-col>
</aloe-row>
```

## 对齐方式
:::tip
通过`<aloe-row>`的`justify`属性，设置`<aloe-col>`的对齐方式。对应的是`flex`布局`justify-content`的五个属性
:::

**实例展示**

<ClientOnly>
<FlexGridDemos></FlexGridDemos>
</ClientOnly>

**示例代码**

```html
<aloe-row justify="center">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="end">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="start">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="between">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="around">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
```

## 响应式结构
:::tip
预设5个尺寸，分别是`phone`、`pad`、`narrow-pc`、`pc`、`wide-pc`,默认为`phone`(无需设置)
:::

**实例展示**
:::tip
调整浏览器窗口查看变化
:::

<ClientOnly>
<RespondGridDemos></RespondGridDemos>
</ClientOnly>

**示例代码**

```html
<aloe-row gutter="5">
    <aloe-col span="35" :pad="{span:30}" :narrow-pc="{span:25}" :pc="{span:20}" :wide-pc="{span:15}">
        <div class="col-content dark"></div>
    </aloe-col>
    <aloe-col span="35" :pad="{span:40}" :narrow-pc="{span:50}" :pc="{span:60}" :wide-pc="{span:70}">
        <div class="col-content light"></div>
    </aloe-col>
    <aloe-col span="35" :pad="{span:30}" :narrow-pc="{span:25}" :pc="{span:20}" :wide-pc="{span:15}">
        <div class="col-content dark"></div>
    </aloe-col>
</aloe-row>
```

**Attributes `<aloe-row>`**
|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|gutter  | 设置子元素的间隙| Number,String |    --    |   0   |
|justify | 设置对齐方式| String |start,end,center,between,around|   start   |

**Attributes `<aloe-col>`**
|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|span  | 元素占比| Number,String |0-100|   --   |
|offset | 偏移占比| Number,String |0-100|   0   |
|pad | `>577px`响应式栅格数或者栅格属性对象| Object  |--|   --   |
|narrow-pc | `>768px`响应式栅格数或者栅格属性对象| Object |--|   --   |
|pc | `≥992px`响应式栅格数或者栅格属性对象| Object|--|   --   |
|wide-pc | `≥1200px`响应式栅格数或者栅格属性对象| Object |--|   --   |
