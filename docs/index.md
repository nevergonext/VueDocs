---
home: true
# heroImage: https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200409124835.png
heroText: Welcome Home
tagline: 先努力让自己发光 对的人才能迎光而来 来路无可眷恋 值得期待的只有前方
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

## 🚀VueDocs

### 安装
1.在您的桌面，轻轻的右键，找到**Git Bash Here**

1.1 在此之前，您需要安装[Git](https://git-scm.com/downloads)，还有[VS code](https://code.visualstudio.com/) 或 [WebStorm](https://www.jetbrains.com/webstorm/)

1.2 顺便再安装一下，[Node.js](https://nodejs.org/zh-cn/)，选择左边的长期维护版

```bash
# Windows 安装
npm install -g yarn --registry=https://registry.npm.taobao.org
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
# 装完顺便通过检查版本确认安装是否成功，失败就去问Google吧
yarn --version

# 克隆Project
git clone https://github.com/AsheOne18/VueDocs.git

# 进入VueDocs目录
cd VueDocs

# 安装依赖
yarn install # 或npm install 

# 启动
yarn docs:dev # 或 # npm run dev

# 万能的8080
http://localhost:8080/
```

### 注意

- 如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn](https://classic.yarnpkg.com/zh-Hans/)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。