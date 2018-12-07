### 项目启动项
  - npm start
### node 服务启动 
  - nodemon server.js 
  ```js
    <!-- 基本使用方法 -->
    app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
    });
    app.get('/login',function(req,res){
    res.json({"name":"XiaoMing","age":"20"})
    })
  ```
### mongodb 启动指令 以管理员模式启动CMD，切换到MongoDB的安装目录，并执行命令：
  - mongod --dbpath "D:\mongodb\data\db"  --logpath "D:\mongodb\logs\log.txt"  --install -serviceName "MongoDB"
  - 本地mongodb 的地址 mongodb://127.0.0.1:27017


### 装饰器配置报错
- Error: The ‘decorators’ plugin requires a ‘decoratorsBeforeExport’ option, whose     value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the ‘decorators-legacy’ plugin instead of ‘decorators’.
- 解决办法 
  - 1.安装装饰器
cnpm install babel-plugin-transform-decorators-legacy  --save-dev
cnpm install  @babel/plugin-proposal-decorators --save-dev

  - 2.然后npm run eject  弹出个性化配置
  修改babel部分，添加代码
    ```js
    "plugins": [
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          ["@babel/plugin-proposal-class-properties", { "loose" : true }]
        ]
    ```
  - 2.如果用的是vscode有提示报错 “experimentalDecorators”
  - 解决办法：
    点击Visual Studio Code左下角的配置按钮(或者文件>首选项>配置)，打开用户设置窗口，在搜索框内输入“experimentalDecorators”
    ```js
    "javascript.implicitProjectConfig.experimentalDecorators": false 
    // 把false改成true 重启编辑器就可以了 
    ```

### 注意：需要在  package.json 中配置跨域的问题
  - 报错原因 代理错误 Proxy error: Could not proxy request /user/info from localhost:3000 to http://localhost:9093/ (ECONNREFUSED).
  - 解决问题的方法 "proxy": "http://localhost:9000"  在 package.json 中配置


### react-router4

### Expree 简介
  - Express 是一个简洁而又灵活的 node.js Web应用框架，提供一系列强大特性，帮助你创建各种 Web 应用，和丰富的 HTTP 工具，
  - 核心特性
    + 可以设置中间件来响应 HTTP 请求
    + 定义了路由表用于执行不同的 HTTP 请求动作
    + 可以通过向模板传递参数来动态渲染html页面
  - 以下几个重要的模块是需要与 express 框架一起安装的：
    + body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
    + cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
    + multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据

