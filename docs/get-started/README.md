---
title:get-started
---
# 快速上手
## 安装
### npm安装
```npm
npm i aloe-ui -S 
```
### yarn安装
```yarn
yarn add aloe-ui -S 
```

## 引入AloeUI
:::tip
你可以引入整个AloeUI，或是根据需要仅引入部分组件。
:::
### 完整引入
在main.js中写入以下内容
```javascript
import Vue from 'vue';
import AloeUI from 'aloe-ui';
import 'element-ui/dist/index.css';
import App from './App.vue';

Vue.use(AloeUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
### 局部引入
如果你只希望引入部分组件，比如 Button 和 Input，那么需要在 main.js 中写入以下内容：
```javascript
import Vue from 'vue';
import { Button, Input } from 'aloeui';
import App from './App.vue';

Vue.component('aloe-button', Button);
Vue.component('aloe-input', Input);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Input)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
## 盒模型
:::warning
s使用本框架前，您需要手动添加border-box盒模型，否则会影响样式。
:::
```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
