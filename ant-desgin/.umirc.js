// ref: https://umijs.org/config/
export default {
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: false,
            title: 'ant-desgin',
            dll: false,
            routes: [{
                path: '/',
                component: '../layout',
                routes: [
                    {
                        path: '/',
                        component: './users/list'
                    }, {
                        path: 'users',
                        component: './list'
                    }, {
                        path: 'comment',
                        component: './commentApp'
                    }, {
                        path: 'title',
                        component: './list'
                    }]
            }],
            hardSource: false,
        }],
    ],
}
