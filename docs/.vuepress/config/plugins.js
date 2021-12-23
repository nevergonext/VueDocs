// 插件配置
module.exports = [

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在Google中搜索',
          frontUrl: 'https://www.google.com/search?q=',
        },
        {
          title: '在百度中搜索',
          frontUrl: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=',
        },
        // {
        //   title: '在MDN中搜索',
        //   frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        //   behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        // },
        {
          title: '在菜鸟教程中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue官方文档中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        // {
        //   title: '在Google中搜索',
        //   frontUrl: 'https://www.google.com/search?q=',
        // },
        // {
        //   title: '在百度中搜索',
        //   frontUrl: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=',
        // },
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      settings: {
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '503f098e7e5b3a5b5d8c5fc2938af002',
    },
  ],
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: 'd70c969234570bca677b',
        clientSecret: '1b4d9f394cf7a4485543cf6378193f12f4c92a56',
        repo: 'VueDocs', // GitHub 仓库
        owner: 'AsheOne18', // GitHub仓库所有者
        admin: ['AsheOne18'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],

        [
         'cursor-effects',
         {
            size: 2, // 粒子大小
            shape: 'circle', // 粒子形状（可选 'star' 和 'circle'）
            zIndex: 999999999,
         },
      ],

      [
         'dynamic-title',
         {
            showIcon: '',
            showText: '哎？你冲完啦！',
            hideIcon: '',
            hideText: '免费色情视频及性爱电影 -A片，X级，色情片分享网站',
            recoverTime: 2000,
         },
      ],
//    ],
      


  
]
