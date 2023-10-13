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
            {text: '首页', link: '/'},
            {
                text: 'END 的 Java 博客',
                items: [
                    {text: 'Github', link: 'https://github.com/END888'},
                    {text: '掘金', link: 'https://juejin.cn/user/81787172952903'}
                ]
            },
            {text: '关于我', link: '/about/About'},
        ],
        sidebar: [
            {
                title: '知识点篇',
                path: '/',
                collapsable: true,
                children: [
                    {
                        title: "Java 基础",
                        collapsable: false,
                        path: '/knowledgePoint/Java 基础',
                    },
                    {
                        title: "MySQL",
                        collapsable: false,
                        path: '/knowledgePoint/MySQL',
                    },
                    {
                        title: "Redis",
                        collapsable: false,
                        path: '/knowledgePoint/Redis',
                    },
                    {
                        title: "Spring",
                        collapsable: false,
                        path: '/knowledgePoint/Spring',
                    },
                    {
                        title: "SpringBoot",
                        collapsable: false,
                        path: '/knowledgePoint/SpringBoot',
                    },
                    {
                        title: "SpringCloud",
                        collapsable: false,
                        path: '/knowledgePoint/SpringCloud',
                    },
                ]
            },
            {
                title: "技术要点篇",
                path: '/handbook/ConditionalTypes',
                collapsable: true,
                children: [
                    {title: "条件类型", path: "/handbook/ConditionalTypes"},
                    {title: "泛型", path: "/handbook/Generics"}
                ],
            },
            {
                title: '工具篇',
                path: '/utils/代码热加载-JRebel 插件',
                collapsable: true,
                children: [
                    {title: "代码热加载-JRebel 插件", path: "/utils/代码热加载-JRebel 插件"}
                ]
            },
        ]
    }
}
