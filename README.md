# README

```bash
$ npm run watch # -> "tsc -p tsconfig.json -w"
$ npm run dev # -> "nodemon index.js"
```

起两个服务，通过 `npm run watch` 实现将 ts 实时转为 js，通过 `npm run dev` 启动真正的 node 服务脚本

```
[nodemon] 1.19.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
```

但是这样会在开发中产生中间文件

其实 nodemon 可以直接起 ts 文件，利用 ts-node 的能力（如果报错，尝试模块内或者全局安装下 `ts-node` 和 `typescript` 两个包）

```bash
$ npm run dev-ts
```

```
[nodemon] 1.19.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node index.ts`
```