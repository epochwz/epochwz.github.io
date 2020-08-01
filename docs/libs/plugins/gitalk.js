// Gitalk https://github.com/gitalk/gitalk
document.write(`<link media="none" onload="media='all'" rel="stylesheet" href="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.css">`)
document.write(`<script async src="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.min.js" onload="loadGitalk()"></script>`)
const loadGitalk = function () {
    window.gitalk = new Gitalk(Object.assign({
        owner: 'epochwz',
        admin: ['epochwz'],
        repo: 'epochwz.github.io',
        clientID: '642ffdf00e6b0a60ac67',
        clientSecret: '304ad527b7550867d9098f7c4e5bb8f580a9c251',
    }, window.$docsify.gitalk))
};

window.$docsify.plugins.push(function (hook) {
    let blacklist = new Set(['README.md', '_coverpage.md', '_sidebar.md', '_navbar.md']);
    typeof window.$docsify.homepage === 'string' ? blacklist.add(window.$docsify.homepage) : '';
    typeof window.$docsify.coverpage === 'string' ? blacklist.add(window.$docsify.coverpage) : '';
    typeof window.$docsify.loadSidebar === 'string' ? blacklist.add(window.$docsify.loadSidebar) : '';
    typeof window.$docsify.loadNavbar === 'string' ? blacklist.add(window.$docsify.loadNavbar) : '';

    let inBlackList = function () {
        let file = location.hash.match(/#.*\/(.*?)([?]|$)/)[1] + ".md";
        return blacklist.has(file);
    };

    let removeGitalk = function () {
        let el = document.getElementById('gitalk-container');
        el && el.parentNode.removeChild(el);
    };

    let createGitalk = function () {
        let width = document.getElementById('main').clientWidth;
        let div = document.createElement('div');
        div.id = 'gitalk-container';
        div.style.cssText = `width: ${width}px; margin: 0 auto 80px;`;
        document.querySelector('.content').appendChild(div);
    };

    let renderGitalk = function () {
        let id = location.pathname + decodeURI(location.hash.match(/#\/(.*?)([?]|$)/)[1]);
        gitalk.options.id = id.length < 50 ? id : id.replace(/.*\/(.*)/, "$1");
        gitalk.render('gitalk-container');
    };

    // 删除黑名单文档 Gitalk
    window.onhashchange = function () {
        if (inBlackList()) {
            removeGitalk();
        }
    };

    // 加载文档后渲染 Gitalk
    hook.doneEach(function () {
        removeGitalk();
        if (!inBlackList()) {
            createGitalk();
            renderGitalk();
        }
    });
})