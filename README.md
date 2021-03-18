# px 转 rem 小工具

</br>

### 功能介绍

可以将你的 css/less/sass 样式文件中的 px 单位自动转换成 rem 单位

</br>
</br>

### 使用说明

-   首先，你得安装 node 环境，该工具是基于 node 环境下运行

-   然后，打开根目录下的 index.js 文件

```javascript
// 参数10代表：1rem = 10px
pxToRem(10);
```

-   再将你所有需要转换的样式文件放入 px-styles 中

-   最后在根目录下执行命令，转换后的文件将输出在 rem-styles 文件夹中

```javascript
node index.js
```
