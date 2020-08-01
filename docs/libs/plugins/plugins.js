// 官方插件
document.write([
    // 谷歌分析
    `<script async src="${window.$docsify.plugins_cdn}/ga.min.js"></script>`,
    // 图片缩放
    `<script async src="${window.$docsify.plugins_cdn}/zoom-image.min.js"></script>`,
    // 外链脚本 (支持在 Markdown 文档中直接嵌入 JS 外链脚本)
    // `<script async src="${window.$docsify.plugins_cdn}/external-script.min.js"></script>`,
].join(''))

// 全文搜索
document.write(`<script async src="${window.$docsify.plugins_cdn}/search.min.js"></script>`)
window.$docsify.search = {
    depth: 4,           // 搜索标题的最大层级
    paths: 'auto',
    maxAge: 86400000,   // 缓存索引的过期时间，单位毫秒，默认一天
    placeholder: 'search',
    noData: 'Not Found!'
}

// 语法高亮 https://cdn.jsdelivr.net/npm/prismjs/components/
document.write([
    `<script async src="${window.$docsify.prismjs_cdn}/prism-bash.min.js"></script>`,
    `<script async src="${window.$docsify.prismjs_cdn}/prism-json.min.js"></script>`,
    `<script async src="${window.$docsify.prismjs_cdn}/prism-java.min.js"></script>`,
    `<script async src="${window.$docsify.prismjs_cdn}/prism-sql.min.js"></script>`
].join(''))


// 代码复制 https://github.com/jperasmus/docsify-copy-code
document.write(`<script async src="//cdn.jsdelivr.net/npm/docsify-copy-code"></script>`)
window.$docsify.copyCode = {
    buttonText: 'Copy',
    errorText: 'Error',
    successText: 'Copied'
}

// 字体图标 https://fontawesome.com/icons?d=gallery&m=free
document.write(`<script async src="https://kit.fontawesome.com/19dbf080bb.js" crossorigin="anonymous"></script>`)

// 定制插件
document.write(`<script async src="${window.$docsify.plugins_url}/scroll-to-top.js"></script>`)
document.write(`<script async src="${window.$docsify.plugins_url}/example.js"></script>`)
document.write(`<script async src="${window.$docsify.plugins_url}/custom.js"></script>`)
document.write(`<script src="${window.$docsify.plugins_url}/gitalk.js"></script>`)
document.write(`<script src="${window.$docsify.plugins_url}/pagination.js"></script>`);

// 目录折叠 https://github.com/iPeng6/docsify-sidebar-collapse
document.write(`<script defer src="https://unpkg.com/docsify-sidebar-collapse@1.1.3/dist/docsify-sidebar-collapse.min.js"></script>`)

// PWA
!window.$docsify.dev && typeof navigator.serviceWorker !== 'undefined' && navigator.serviceWorker.register(`pwa.js`)