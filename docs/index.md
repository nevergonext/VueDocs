---
home: true
heroImage: https://raw.githubusercontent.com/AsheOne18/Image-Repository/main/Image/hero.png
heroText: Welcome Home
tagline: 故不积跬步，无以至千里；不积小流，无以成江海。VuePress，记录爱学习的你
# actionText: 使用教程 →
# actionLink: /pages/b45ea2/
# bannerBg: 'https://raw.githubusercontent.com/AsheOne18/Image-Repository/main/Image/bg02.jpg' # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式     

# features: # 可选的
#   - title: 前端
#     details: Js / Ts / Ruby / Html / Css
#     link: /web/ # 可选
#     imgUrl: /img/ui.png # 可选
#   - title: 后端
#     details: C / C++ / Java / Go / Lua
#     link: /ui/
#     imgUrl: /img/python.png
#   - title: 技术
#     details: Framework / Tools / Bug
#     link: /technology/
#     imgUrl: /img/other.png
  # - title: 小记
  #   details: 鸡汤 / 心情 / 日记
  #   link: /more/
  #   imgUrl: https://raw.githubusercontent.com/AsheOne18/Image-Repository/main/Image/qin.png
  # - title: 收藏
  #   details: Web / 工具 / 软件 / 项目 / 代码
  #   link: /pages/beb6c0bd8a66cea6/
  #   imgUrl: https://raw.githubusercontent.com/AsheOne18/Image-Repository/main/Image/ZzGo.png
  # - title: 索引
  #   details: 分类 / 标签 / 归档
  #   link: /pages/beb6c0bd8a66cea6/
  #   imgUrl: https://raw.githubusercontent.com/AsheOne18/Web-SimpleExample-MusicPlayer/main/img/11.jpg
# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）

postList: none

---
## ⚡朋友圈
::: cardList 4
```yaml
- name: GK
  desc: 坐标：纽约 / 长岛<br>技术：前端开发 / 网站设计<br>人特别好，Ashe编程的入门导师<br>全地球上最帅的页面仔
  avatar: https://avatars.githubusercontent.com/u/84965845?v=4 
  link: https://github.com/G7M7T1 # 可选
  bgColor: '#8958AF' 
  textColor: '#040308' 
- name: 老徐
  desc: 坐标：纽约 / 皇后区<br>技术：C++ / 游戏开发<br>特别喜欢百鬼綾目<br>愿意为了她花300美金买一个枕套
  avatar: https://avatars.githubusercontent.com/u/84511124?v=4 
  link: https://github.com/Xpakeb13 
  bgColor: '#D7ABDD' 
  textColor: '#040308' 
- name: ZzGo
  desc: 坐标：福建 / 北京<br>技术：JavaWeb开发<br>北邮硕士/网易高级工程师<br>我的亲表哥，工作是教我Debug
  avatar: https://raw.githubusercontent.com/AsheOne18/Image-Repository/main/Image/ZzGo.png
  bgColor: '#6C5CC8' 
  textColor: '#040308' 
- name: 王楠钦
  desc: 坐标：福建 <br>技术：JavaWeb开发<br>喜欢在图书馆把舍友卷死<br>ACM预选冠军<br>初中同学，好久不见
  avatar: https://raw.githubusercontent.com/AsheOne18/Image-Repository/main/Image/qin.png
  bgColor: '#DFBD94' 
  textColor: '#040308' 
```
:::

## 🚀VocDocs 介绍
1. VucDocs是一款基于[`VuePress`](https://vuepress.vuejs.org/)搭建的博客网站
2. 这是一个和小伙伴一起用的`VuepressBlog`，用来记录一些学习，Bug
3. 鲁迅曾经说过，如果一个`Bug没法在15秒内解决它`，在解决之后，一定要记录
4. 网上冲浪固然有意思，但是充斥着各种`没用的解决方案`并被无限的`复制黏贴`
5. 因此，有一个属于小伙伴们一起维护的`VuepressBlog`就固为重要
6. 经常会感慨原来连`HelloWorld`不会写的自己，记录何尝不是一件好事
## ❓VuePress是什么？
[VuePress](https://vuepress.vuejs.org/)本质上是一个`Vue-powered Static Site Generator`

- **Simplicity First**
- **Minimal setup with markdown-centered project structure helps you focus on writing.**
- **Vue-Powered
Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.**
- **Performant
VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.**

对于普通的User来说，VuePress对比大多数的`Static Site Generator`解决了一个最核心`MarkDown不能写Html标签`的问题
```Bash
# 别的博客
您必须在此输入Html语法
```
## ✔VuePress以及VueDocs的优点
1. 进行了移动端的页面适配,在手机上访问`VueDocs`的时候将不会出现`样式排序错乱`的问题,有一个良好的访问体验
2. 自动进行生成侧边栏数据,不需要手动添加,目录有序,轻松在10秒内快速寻找到一个知识点
3. 任何`笔记`将以本地文件的形式高速部署在网站上,保证了数据的安全性
  
在此之前,因为学习我尝试过大量的Note App<br>
`onenote` `印象笔记` `Typora` `Notion` `有道云笔记`<br>
它们是好软件,但是同时缺陷也无可避免

## 🎉启动

::: details
```bash
# Windows 安装yarn
npm install -g yarn --registry=https://registry.npm.taobao.org
# 配置
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
# 装完顺便通过检查版本确认安装是否成功，失败就去问Google和百度吧
yarn --version
```
:::


::: details
```bash
# 克隆Project
git clone https://github.com/AsheOne18/VueDocs.git

# 进入VueDocs目录
cd VueDocs

# 安装依赖
yarn install # 或npm install 

# 启动
yarn docs:dev # 或 # npm run dev
```
:::