module.exports = {
    base: '/',
    title: 'END 博客',
    description: 'Java 学习记录',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        // 开启每篇文章的上次更新时间
        lastUpdated: '上次更新', // string | boolean
        // 开启右侧菜单栏
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'END 的 Java 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            },
            { text: '关于我', link: '/about/About' },
        ],
        sidebar: [
            {
                title: '工具',
                path: '/utils/代码热加载-JRebel 插件',
                collapsable: false, // 不折叠
                children: [
                    { title: "代码热加载-JRebel 插件", path: "/utils/代码热加载-JRebel 插件" }
                ]
            },
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}
