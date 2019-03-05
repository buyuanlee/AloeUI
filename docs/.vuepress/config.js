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
                title: '开始',
                children: [
                    '/intro/',
                    '/get-started/'
                ]
            },
            {
                title: '介绍',
                children: [ '/intro/','/get-started/' ]
            }
        ]
    }
};
