window.$docsify.plugins.push(function (hook) {
    hook.ready(function () {
        // 合并配置
        window.$docsify.scroll = Object.assign({
            size: 50,           // 小火箭的大小
            color: '#bfbfbf',   // 小火箭的颜色
            right: 0,           // 小火箭右边距
            bottom: 80,         // 小火箭下边距
            // text: '',        // 小火箭 HTML (通过 HTML 可以完全自定义图标内容)
            offset: 1000,       // 距离屏幕顶部多远时显示 "小火箭" 按钮 (若为 0 则一直显示)
            scrollTime: 250,    // 向上滚动耗时
            scrollFreq: 10,     // 向上滚动频率
        }, window.$docsify.scroll);

        // 最终配置
        let config = Object.assign({
            text: `<svg width="${window.$docsify.scroll.size}" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="${window.$docsify.scroll.color}" d="M728.259928 951.502607c0 0 9.828663-59.030657-50.786316-131.1173 59.001318-165.502951 67.186981-316.218899 67.186981-316.218899s121.259297 27.872328 121.259297 147.459286c-0.029339 204.817604-137.659962 299.876912-137.659962 299.876912zM394.026703 879.592c0 0-81.211163-260.620939-81.211163-368.736233 0-48.644548 5.486448-91.920005 14.024182-131.205318l369.968483 0c8.596413 39.314652 14.1122 82.619449 14.1122 131.234657 0 106.472294-80.976448 368.706894-80.976448 368.706894l-235.917254 0zM511.706607 439.238554c-41.603117 0-75.343304 33.740187-75.343304 75.372643 0 41.603117 33.740187 75.372643 75.343304 75.372643s75.372643-33.740187 75.372643-75.372643c0.029339-41.632457-33.740187-75.372643-75.372643-75.372643zM495.511317 102.628846l0-102.628846 29.339293 0 0 100.017649c33.534812 24.410292 124.281245 102.042061 165.326915 251.584436l-356.765801 0c39.666724-145.434875 126.041602-222.215804 162.099593-248.973239zM295.740072 951.502607c0 0-137.630623-95.059309-137.630623-299.876912 0-119.586958 121.259297-147.459286 121.259297-147.459286s8.185663 150.715948 67.157641 316.218899c-60.644318 72.115982-50.786316 131.1173-50.786316 131.1173zM561.612744 966.641682l-24.586327-24.586327-26.199989 81.944645-31.158329-81.944645-21.300327 42.571314-31.158329-77.015644 168.759613 0-34.356312 59.030657z"></path></svg>`,
        }, window.$docsify.scroll);

        // 创建滚动按钮
        let btn = document.createElement('span');
        // 控制按钮样式
        btn.style.display = 'none';
        btn.style.position = 'fixed';
        btn.style.cursor = 'pointer';
        btn.style.overflow = 'hidden';
        btn.style.right = `${config.right}px`;
        btn.style.bottom = `${config.bottom}px`;
        btn.innerHTML = config.text;
        btn.className = 'scroll-to-top';
        // 监听按钮事件
        btn.onclick = function (e) {
            e.stopPropagation();
            let step = window.scrollY / (config.scrollTime / config.scrollFreq);
            let scroll = function () {
                window.scrollTo(0, window.scrollY - step);
                if (window.scrollY > 0) {
                    setTimeout(scroll, config.scrollFreq);
                }
            };
            scroll();
        };
        // 添加滚动按钮
        document.body.appendChild(btn);
        // 监听滚动事件
        window.addEventListener('scroll', function () {
            btn.style.display = window.scrollY >= config.offset ? "block" : "none";
        });
    });
})