const path = require("path");
const fs = require("fs");

// px转为rem
function pxToRem(ratio) {
    // 读取px-styles下的文件列表
    const files = [];
    const pxFilesPath = path.resolve(__dirname, `../px-styles/`);
    const filesName = fs.readdirSync(pxFilesPath);
    filesName.forEach((name) => {
        files.push({
            name,
            path: path.resolve(pxFilesPath, name),
        });
    });

    files.forEach((file) => {
        // 读取文件内容
        let str = fs.readFileSync(file.path, "utf8");
        // 匹配出所有的px内容
        const pxArr = str.match(/([0-9]*|[0-9]*\.[0-9]*)px/g);
        // 将str中所有的pxArr替换成rem
        pxArr.forEach((s) => {
            const remStr = ` ${(parseFloat(s) / ratio).toFixed(2)}rem`;
            const reg = new RegExp(s);
            str = str.replace(reg, remStr);
        });

        // 将转换好的rem内容输出到rem-styles目录下
        const fileRemPath = path.resolve(__dirname, `../rem-styles/${file.name}`);
        fs.writeFileSync(fileRemPath, str);
    });
}

module.exports = pxToRem;
