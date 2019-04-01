module.exports = {
    title: 'Aloe UI',
    description: '一套简约风格UI',
    base: '/AloeUI/',
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico`}]
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Github', link: 'https://github.com/buyuanlee'},
            {text: 'External', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '关于AloeUI',
                children: [
                    '/intro/',
                ]
            },
            {
                title: '快速开始',
                children: ['/get-started/']
            },
            {
                title: '组件',
                children: ['/components/', '/components/icon','/components/button','/components/input','/components/button-group','/components/grid']
            }
        ]
    }
};
