module.exports = {
    
    base: '/y-vue-test-1/',
    title: 'YVUE UI',
    description: '一个好用的UI框架',
    themeConfig: {
      // repo: 'https://github.com/Keith-Yong/y-vue-test-1',
      nav: [
        {text: '主页', link: '/'},
        {text: '文档', link: '/install/'},
        {text: 'Github', link: 'https://github.com/Keith-Yong/y-vue-test-1'},
      ],
      sidebar: [
        {
          title: '入门',
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            '/install/',
            '/get-started/',
          ]
        },
        {
          title: '组件',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            '/components/button',
            
            '/components/input',
            '/components/layout',
          
            '/components/tabs',
            '/components/toast',
            '/components/collapse',
        ],
     },
  
      ]
    }
  }