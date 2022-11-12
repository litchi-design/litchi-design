module.exports = {
    title: 'Litchi Design',
    description: 'Mobile terminal style component library based on Vue 3.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: '最后更新时间',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑此⽹站',
        repo: 'https://github.com/login',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Litchi Design',
        },
        nav: [{
                text: '指南',
                link: '/guide/installation',
                activeMatch: '/guide/installation',
            },
            {
                text: '组件',
                link: '/examples/button',
                activeMatch: '/examples/button',
            },
        ],
        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/litchi-design/litchi-design',
        }, ],
        sidebar: {
            '/guide/': [{
                text: '指南',
                items: [{
                        text: '安装',
                        link: '/guide/installation',
                    },
                    {
                        text: '快速开始',
                        link: '/guide/quickstart',
                    },
                ],
            }, ],
            '/examples/': [{
                text: '基础组件',
                items: [{
                        text: 'Button按钮',
                        link: '/examples/button',
                    },
                    { text: 'Icon图标', link: '/examples/icon' },
                ],
            }, ],
        },
    },
};