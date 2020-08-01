// 完整插件示例 https://docsify.js.org/#/write-a-plugin
window.$docsify.plugins.push(function (hook, vm) {
    hook.init(function () {
        // Called when the script starts running, only trigger once, no arguments,
    });

    hook.beforeEach(function (content) {
        // Invoked each time before parsing the Markdown file.
        // ...
        return content;
    });

    hook.afterEach(function (html, next) {
        // Invoked each time after the Markdown file is parsed.
        // beforeEach and afterEach support asynchronous。
        // ...
        // call `next(html)` when task is done.
        next(html);
    });

    hook.doneEach(function () {
        // Invoked each time after the data is fully loaded, no arguments,
        // ...
    });

    hook.mounted(function () {
        // Called after initial completion. Only trigger once, no arguments.
    });

    hook.ready(function () {
        // Called after initial completion, no arguments.
    });
});

// 初始化完成的时候调用一次
window.$docsify.plugins.push(function (hook) {
    hook.init(function () {
        console.log("init")
    });
});

// 每次解析文档内容之前调用
window.$docsify.plugins.push(function (hook) {
    hook.beforeEach(function (content) {
        console.log("beforeEach")
        return content;
    });
});

// 每次解析文档内容之后调用
window.$docsify.plugins.push(function (hook) {
    hook.afterEach(function (html, next) {
        console.log("afterEach")
        next(html);
    });
});

// 每次加载数据完成之后调用
window.$docsify.plugins.push(function (hook) {
    hook.doneEach(function () {
        console.log("doneEach")
    });
});

// 初始化并第一次加载完成数据后调用 (仅调用一次)
window.$docsify.plugins.push(function (hook) {
    hook.mounted(function () {
        console.log("mounted")
    });
});

// 初始化并第一次加载完成数据后调用
window.$docsify.plugins.push(function (hook) {
    hook.ready(function () {
        console.log("ready")
    });
});