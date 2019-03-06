module.exports = {
    title: 'Aloe UI',
    description: '一套简约风格UI',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
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
                children: ['/components/','/components/button']
            }
        ]
    }
};
