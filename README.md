<div align="center">
<img src="https://avatars.githubusercontent.com/u/89166015?v=4" width=200>
</div>
<h1 align="center">Vue-Docs</h1> 

- [Preview VueDocs](https://asheone18.github.io/VueDocs/)
- [README](README.md)


<h2>⭐ Start environment</h2>

1. You should install [Git](https://git-scm.com/downloads)，[VS code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/) and install [Node.js](https://nodejs.org/en/)

2. And install [Yarn](https://yarn.bootcss.com/docs/install/#windows-stable)

> Why not use `npm` but `yarn` as a dependency? Never saying npm doesn't work！ you can also use `npm`...
> 
> If you can't download it from yarn's official website, let's follow the steps below to download
```yml
# for Windows
npm install -g yarn --registry=https://registry.npm.taobao.org
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

# cheak version
yarn --version
```

<h2>🐊 Deployment environment </h2>

```yml
# Clone Project
git clone https://github.com/AsheOne18/VueDocs.git

# Go Project Directory
cd VueDocs

# Install dependencies
yarn install # or # npm install 

# Start
yarn docs:dev # or # npm run dev

# Visit it
http://localhost:8080/
```

<h2>🎬 Tree</h2>

```yml
├─.github
│  └─workflows
│     └─ci.yml # Automatic deployment 
├─docs # Do not change it name 
│  ├─.vuepress
│  │  ├─config # config
│  │  ├─plugins # plugins
│  │  ├─public 
│  │  │  ├─img # img
│  │  └─styles # css
│  └─index.md # index.html
├─theme-vdoing # theme
│  ├─all files # theme
└─utils # nothing to use
    └─modules
```
