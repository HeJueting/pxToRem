# px 转 rem 小工具

</br>

### 功能介绍

可以将你的 css/less/sass 样式文件中的 px 单位自动转换成 rem 单位

</br>
</br>

### 使用说明

-   首先，你得安装 node 环境，该工具是基于 node 环境下运行

-   然后，你的样式文件符合以下标准，方可使用

```css
.test {
    margin: 20px;
    padding: 8px 15px;
    word-wrap: break-word;
    border-radius: 2px;
}
```

注意：每一个 px 单位前都有一个**空格符号**

-   最后，将你所有需要转换的样式文件放入 px-styles 中，执行命令：

```javascript
node index.js
```

转换后的文件将输出在 rem-styles 文件夹中
