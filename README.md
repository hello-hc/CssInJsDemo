# CSS in JS Demo

**CSS in JS 简介**
使用JavaScript 操作 CSS 属性。即为CSS in JS。

**项目执行命令**
````shell
npm run start
npm run build
npm run test
npm run eject
````

**Demo介绍**
本项目采用CSS in JS封装的`styled-components`库来尝试了它是如何使用的。

**个人使用感受**
个人感觉，还是不推荐使用这种js操作css的方式。
原因：
1. 开发不便捷，效率低下 - 在模版字符串中IDE无法给出代码提示
2. 强行把css跟js关联上关系，导致css不像css，js不像js。将css和js区分开对于项目的日益庞大和后期的维护是不方便的。
3. 在如今的 webpack 和 css预处理 的使用下，单独的样式的功能已经十分强大，体验较好。