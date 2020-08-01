// 站内图片链接自动转换：支持在 Markdown 中使用项目根路径 /docs/${image_dir} 作为图片引用的相对链接
// eg. when ${image_dir}=images then
// markdown:   /docs/images/xxx.png
// html:       http://host:port/site-root-path/images/xxx.png
window.$docsify.plugins.push(function (hook) {
    let image_dir = window.$docsify.image_dir ? window.$docsify.image_dir : "images";
    let base_path = window.$docsify.basePath;
    let base_url = window.location.href.split("#")[0];
    if (base_path) {
        base_url = base_path.indexOf("http") !== -1 ? base_path : base_url + base_path;
    }
    hook.beforeEach(function (content) {
        return content.replace(new RegExp(`([:(]\\s*)\\/docs\\/(${image_dir})`, "g"), `$1${base_url}$2`);
    });
});

// 在文章标题下面追加文档内容
window.$docsify.plugins.push(function (hook) {
    hook.beforeEach(function (content) {
        // 文档更新时间
        let date = "> ? Last modified at {docsify-updated}\r\n";
        // 水平分割线
        let hr = "\r\n---\r\n";

        // 最终追加内容
        let markdown = date + hr;
        return content.replace(/\s*(^# .*[\r\n]+)/g, `$1${markdown}`);
    });
});

// 兼容 docsify 的特殊语法
window.$docsify.plugins.push(function (hook) {
    hook.beforeEach(function (content) {
        // 引用内容强调
        //  1. 支持在 Markdown 中使用 "> ! " 进行引用内容的强调；原始语法 "!> "
        //  2. 支持在 Markdown 中使用 "> ? " 进行引用内容的强调；原始语法 "?> "
        content = content.replace(/([\r\n])> ([!?]) /g, "$1$2> ");
        return content;
    });
});