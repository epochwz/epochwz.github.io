window.$docsify = Object.assign({
    // 标题
    name: 'Epoch\'s Blog',
    // 仓库
    repo: 'epochwz/epochwz.github.io',
    // 主页
    homepage: 'README.md',
    // 封面
    coverpage: 'cover.md',
    // 导航栏
    loadNavbar: 'navbar.md',
    // 侧边栏
    loadSidebar: 'sidebar.md',
    // 侧边栏目录的标题最大渲染层级 (自定义侧边栏后需以此开启)
    subMaxLevel: 4,
    // 侧边栏目录的标题最大渲染层级 (自定义侧边栏后则无需开启)
    // maxLevel: 4,
    // 根据侧边栏自动添加文档的标题
    autoHeader: true,
    // 小屏设备合并导航栏到侧边栏上
    mergeNavbar: true,

    // 页面锚点滚动后的上边距
    topMargin: 10,
    // 切换页面时自动跳回顶部
    auto2top: true,
    // 只在访问主页时加载封面
    onlyCover: true,
    // 渲染文档时使用相对路径
    relativePath: true,
    // 允许执行文档的内嵌脚本 (外部脚本需要添加 external-script 插件)
    executeScript: true,
    // 格式化文档最近更新时间
    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',

    // 路由别名
    alias: {
        '/docs/(.*)': '/$1',
        '.*/navbar.md': '/navbar.md',
    },

    // 插件列表
    plugins: [],
    // 核心脚本路径
    plugins_lib: 'https://cdn.jsdelivr.net/npm/docsify/lib',
    // 语法高亮路径
    prismjs_cdn: '//cdn.jsdelivr.net/npm/prismjs/components',
    // 核心插件路径
    plugins_cdn: 'https://cdn.jsdelivr.net/npm/docsify/lib/plugins',
    // 定制插件路径
    plugins_url: 'https://raw.githack.com/epochwz/epochwz.github.io/master/docs/libs/plugins',
}, window.$docsify);

document.write([
    // 页面信息
    `<meta charset="UTF-8">`,
    `<meta http-equiv="X-UA-Compatible" content="ie=edge">`,
    `<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">`,
    // 页面标题
    `<title>${window.$docsify.name}</title>`,
    // 核心样式
    `<link href="${window.$docsify.plugins_lib}/themes/vue.css" rel="stylesheet" media="none" onload="media='all'">`,
    // 核心元素
    `<div id="app"></div>`,
    // 核心脚本
    `<script src="${window.$docsify.plugins_lib}/docsify.min.js" data-ga="UA-173907127-1"></script>`,
    // 定制插件
    `<script src="${window.$docsify.plugins_url}/plugins.js"></script>`,
].join(''))