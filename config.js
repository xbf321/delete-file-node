module.exports = {
    // 目录
    ROOT: '/Users/baifang.xing/Project/github-xbf321/delete-file-node/resource/**/*.bak',

    // 文件名
    // eg: /^u_ex(\d+)\.log/
    // eg: /^(\d+)[\w_]+\.bak/
    PATTERN: /^(\d+)[\w_]+\.bak/,

    // 格式
    // eg: YYMMDD
    // eg: YYYYMMDD
    MOMENT_FORMAT: 'YYYYMMDD',

    // 删掉几天之前的数据
    BEFORE: 2
};