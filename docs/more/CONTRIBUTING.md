---
id: CONTRIBUTING
title: 贡献指南
original_id: CONTRIBUTING
sidebar_label: 贡献指南
---

## 环境配置
  
- ide首推`vscode`

- node选择当前最新的版本

- `vscode`需要安装下面几个插件
  
  `eslint`、`Prettier - Code formatter`

- 我们所有的代码规范都是基于`eslint`，代码风格基于`prettier`

- 请使用`yarn`工具来构建依赖

## 准备工作

  ```bash
  # 克隆award项目
  # 安装依赖
  $ yarn start

  # 编译出待发布包
  $ yarn build

  # 开发环境命令
  $ yarn dev
  ```

## 运行示例

> 启动`yarn dev`，然后依次拷贝如下命令在Award框架根目录运行

  - 在`award`根目录下创建文件夹`test`，然后在`test`内创建demo文件夹`demo`用于进行示例开发

    ```bash
    mkdir -p test/demo
    ```

  - 初始化`package.json`

    ```bash
    cd test/demo && yarn init -y
    ```

  - 项目根目录创建`index.js`
  
    ```bash
    echo -e "import { start } from 'award';\r\nstart(() => <h1>hello world</h1>);" > index.js
    ```

  - 最后执行命令，通过浏览器查看

    ```bash
    award dev
    ```

  - 接下来尝试修改`packages/**/src/**/*.tsx?`相关文件，更多内容请自行探索

## 单元测试

  使用`jest`来进行测试每一个`package`

  - 执行`yarn jest`命令，查看测试执行，同时可以编写测试，驱动功能开发

  - 譬如查看某个库的单元测试覆盖情况

    ```sh
    # 查看award库的单元测试覆盖
    yarn test:coverage --collectCoverageFrom="packages/award/src/**/*.{ts,tsx}"
    ```

## 文档编写

> award文档基于[`docusaurus@1.14.6`](https://github.com/facebook/docusaurus)构建的

- 安装文档依赖
  
  ```shell
  $ cd website
  $ yarn
  ```

- 启动文档可视化命令

  ```
  # in website dir
  $ yarn start

  # in award root dir
  $ yarn doc
  ```

- 发布文档
  
  - 提交Merge Request
  
  > 接下来操作，都是在`website`文件夹内执行，且需要保证`gh-pages`已经克隆，执行命令
    ```shell
    $ git submodule init
    $ git submodule update
    ```

  - 审核通过后，合并master分支，同时执行编译文档脚本
    ```shell
    $ yarn build
    ```

  - 执行拷贝命令，需安装`rsync`拷贝工具
    ```shell
    rsync -av build/award-docs/* ../gh-pages
    ```
  
  - 切换到`gh-pages`文件夹，进行git提交，并推送到远端

    ```shell
    # 或者在根目录执行如下命令
    git submodule foreach 'git add .'
    git submodule foreach 'git commit -m "更新文档"'
    git submodule foreach 'git push'
    ```