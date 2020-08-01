// 文章导航 https://github.com/imyelo/docsify-pagination
document.write(`<script defer src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script>`)
// 固定导航 https://github.com/shawntabrizi/docsify-slides
document.write(`<script defer src="//unpkg.com/docsify-slides@1.0.4/dist/docsify-slides.min.js"></script>`)
window.$docsify.pagination = {
    crossChapter: true,
    crossChapterText: true,
    // nextText: 'NEXT',
    // previousText: 'PREVIOUS',
    // routerMode: window.$docsify.routerMode
}

document.write(` <style type="text/css">
.content {
    padding-top: 60px;
}

.docsify-pagination-container {
    height: 5em;
}

.docsify-pagination-container .pagination-item{
    margin-top: 0.5em;
}

.docsify-pagination-container .pagination-item .pagination-item-subtitle {
    display: none;
}
</style> `)