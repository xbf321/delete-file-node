# nodejs 删除特定规则的文件。

## 配置文件说明，config.js
```
// 删除所做的目录
ROOT: '/xxxx/resource/**/*.bak',

// 特定的文件名
// eg: /^u_ex(\d+)\.log/
// eg: /^(\d+)[\w_]+\.bak/
PATTERN: /^(\d+)[\w_]+\.bak/,

// 文件名格式，主要换算成标准的时间格式
// eg: YYMMDD
// eg: YYYYMMDD
MOMENT_FORMAT: 'YYYYMMDD',

// 删掉几天之前的数据
BEFORE: 2
```

## 安装依赖

```
yarn install
```

## 启动

```
yarn run start
```