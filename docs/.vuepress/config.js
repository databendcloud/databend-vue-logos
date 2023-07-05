module.exports = {
  title: 'nandit-vue',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/nandit-vue-vant/',
  markdown: {
    lineNumbers: true 
  },
  themeConfig: {
    logo: '/logo.png',
    sidebarDepth: 2, 
    activeHeaderLinks: true,
    nextLinks: true,
    prevLinks: true,
    nav:[
      { text: '指南', link: '/guide/' }, 
      { text: '帮助', link: '/help/' },
      { text: '博客', link: 'https://blog.csdn.net/tglsaturn', target:'_blank' },
      {
        text: 'Git',
        items: [
          { text: 'Gitee', link: 'https://gitee.com/jiuage' },
          { text: 'Github', link: 'https://github.com' }
        ]
      }
    ],
    sidebar: { 
      '/guide/':[
        {
          title: '指南',
          collapsable: false,
          children: [
            ['', '介绍'],
            ['start.md', '快速上手']
          ]
        },
        {
          title: '深入',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['link.md', '链接']
          ]
        }
      ],
      '/help/': 'auto'
    }
  }
}
