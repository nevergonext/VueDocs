// nav
module.exports = [
  { text: '首页', link: '/' },

  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript》', link: '/note/javascript/' },
          { text: '《Vue》', link: '/note/vue/' },
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/ui/',
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《Java》', link: '/note/java/' },
          { text: '《C++》', link: '/note/cpp/' },
        ],
      },
      {
        text: '相关技术',
        items: [
          { text: '《Redis》', link: '/note/redis/' },
          { text: '《Docker》', link: '/note/docker/' },
        ],
      },
    ],
  },
  // ------------------------------------------------
  {
    text: '技术',
    link: '/technology/',
    items: [
{
  text: '学习笔记',
  items: [
    {text: '《Maven》',link: '/note/maven/'},
    {text: '《SSM》',link: '/note/ssm/'},
    {text: '《SpringBoot》',link: '/note/springboot/'},
    {text: '《SpringCloud》',link: '/note/springcloud/'},
  ]
}
    ],
  },
  // -------------------------------------------------
  {
    text: '问题',
    link: '/bug/',
    items: [
      { text: '后端Bug', link: '/pages/270ace/' },
      // { text: '前端Bug'}, link: 'asdsaddsa' },
    ],
  },

  {
    text: '小记',
    link: '/more/',
    items: [
      { text: '一些实用小技巧', link: '/pages/0b37ee/' },
      { text: '心里的小思绪', link: '/pages/50fe87/' },
      { text: '好玩的项目', link: '/pages/2d615df9a36a98ed/' },
      { text: '开发环境', link: '/development/' },
    ],
  },

  { 
    text: '教程', 
    link: '/turorials/',
    items: [
      { text: '快速上手', link: '/pages/b45ea2/'},
      { text: '使用细节', link: '/pages/a6f543/'}
    ],
  },

  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },

]
