#### 1.1 快捷键 

- webstorm 
 
    - 代码格式化 win+alt+L

#### 1.4 新换电脑，安装好 git 后，如何把本地分之提交到远程分支

主要分为三大步：先在本地git添加git账户和邮箱，然后配置好公私密钥，最后再准备上传
1. 查看 git 是否安装成功：`git --version` 或者 `git -v`  出现版本号就是成功了
2. 添加 git 账户和邮箱，用于每次提交时记日志，要注意提交公司的内容用公司的邮箱，提交自己的内容要重新设置下面的语句，换成自己的 bandari 邮箱

    - `git config --global user.name "你的注册用户名 qunar 给我的用户名"`
    - `git config --global user.emall "你的注册邮箱 qunar 给我的邮箱"`

3. 生成密钥：

    - 首先检查电脑是否曾经生成过密钥 `cd ~/.ssh`  若打开的文件夹为空，则表示没有生成过密钥，进入下一步 （～表示根目录）
    - 生成密钥 `ssh-kengen -t rsa -C "邮箱"` 回车之后，会要求输入密码，不要输入密码，否则后续上传都会输入这个密码，直接三个回车即可。执行成功以后，会在主目录 .ssh 目录下生成两个文件：id_rsa 私钥文件和 id_rsa.pub 公钥文件。
    - 执行 `cat ~/.ssh/id_rsa.pub` 得到 key，把 `ssh-rsa .....` 这一长串的内容放在远程 gitlib 里面的的 setting ---> SSH Keys --->
里面的 key，tittle 里面写是谁的密钥，或者哪个电脑的密钥描述

4. 上传代码：分为以下几种情况：分支到分支 分支到 master  目前只会分支到分支

     4.1 先把远端的仓库 clone 到本地的文件夹中：首先在终端 cd 到自己的文件夹，用来放即将 clone 的仓库。去远端要 clone 的仓库找到 ssh 地址，复制下来，在终端输入：`git clone 复制的地址`，执行完以后，本地获得了远端的仓库，并且在 master 分支上。

     4.2 在保证远端有自己的分支的前提下，在本地创建一个自己的分支并切换到这个新创建的分支。通过 `git checkout -b 分支名`

     4.3 把自己做的任务的文件直接拖入到 clone 仓库的文件夹中，保证自己的做的任务文件的隐藏文件中没有 .git 文件。这是个大坑，如果有隐藏的 .git 文件，就要删除，否则会提交不成功的。那么如何让显示隐藏的文件呢？ 终端输入并执行：`defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder`

     4.4 保证没有 .git 文件以后，为了不让本地的代码上传 node_modules文件，先看 clone 的仓库有没有 .gitignore 文件，如果没有的话，需要执行 `touch .gitignore`，然后用编辑器打开这个文件，随便找一行，添加上 "**/node_modules" ，以后上传就可以忽略这个文件了。
     （那么问题来了，当下载到另外的电脑怎么运行呢？
     进入有 package.json 的那个目录，启动终端，执行 `sudo npm install` ，然后再安装一个 nodemon，执行 `sudo npm install -g nodemon` 就可以全局安装 nodemon。然后再执行 `npm start`，就可以正常运行了）

     4.5 然后就是正常的 `git add` 之类的    
     
     
#### 1.5 新建了 react-app 上传不了 gitlab
解决方案：把这个 react-app 隐藏的 .git 文件删除，再重复之前的操作步骤上传就好了