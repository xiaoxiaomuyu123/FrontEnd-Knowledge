## 场景：遇到一个新的项目，需要从远端仓库拉取到本地，有两种方式：

### 一、git clone

`git clone 仓库地址`    

缺点：克隆的就是 master 分支，没有其他分支，如果想要拉取的是 其他分支，不容易操作。要拉取其他分支推荐 git pull

### 二、git pull

#### 2.1 在本地新建仓库
仓库的名称和要拉取的仓库的名字一样，要注意不是分支名，是仓库名，步骤如下：     

-  先新建一个文件夹 

    - 在 linux 或 mac 环境下，执行：`mkdir 仓库名（文件名）`   
    
- 将这个文件夹初始化为一个 git 仓库 

    - 执行 `git init`

#### 2.2 把远端仓库的地址添加到本地仓库中     

- 执行 `git remote add origin 远端仓库地址`

注意，如果不小心把 `git remote add origin 远端仓库地址` 中的 `远端仓库地址` 输入成了 `远端仓库名`，可以执行 `git remote rm origin` 将错误的连接移除

- 查看添加的远端仓库的地址： 执行 `git remote -v`    

#### 2.3 从远端拉取其他分支到本地仓库     

- 执行 `git fetch origin 要拉取的分支名称`

#### 2.4 在本地新建一个分支，这个分支名字和从远端拉取的分支名字要一样，并将两者建立联系     

- 执行 `git checkout -b 分支名称 origin/远端分支名`

#### 2.5 现在直接从远端仓库 拉取 该分支    

- 执行 `git pull origin 远端分支名`   

#### 2.6 修改了为文件，提交到远端仓库    

- 执行 `git status`

- 执行 `git add -A`

- 执行 `git status`  

- 执行 `git commit -m"提交信息"`

-  现在要把修改的文件 push 到远端仓库，要注意必须要有 `-u` 参数 

    - 执行 `git push -u origin 远端仓库分支名`
    
    
#### 2.7 后续自己在本地修改了文件，想要 提交到远端分支的步骤      

- 执行 `git status`

- 执行 `git add -A`

- 执行 `git status`  

- 执行 `git commit -m"提交信息"`

- -  现在要把修改的文件 push 到远端仓库，此时因为已经建立连接，就不需要 `-u` 参数
  
      - 执行 `git push origin 远端仓库分支名`
  
#### 2.8 多人协作共同使用一个仓库的时候，正确的操作是：      
要注意，每天工作开始前的第一件事，一定要执行 `git pull origin 分支名` 把本地仓库更新一下，然后自己在自己的电脑上进行文件的修改，修改完成以后，要提交，就按照下面正常的步骤进行就可以啦    

- 执行 `git status`

- 执行 `git add -A`

- 执行 `git status`  

- 执行 `git commit -m"提交信息"`  

- 执行 `git push origin 分支名称`

      
#### 2.9 远端仓库更新了文件，自己忘记按照 2.8 的步骤，先 `pull`下来在修改，而是自己在本地先修改了文件，现在想要自己的文件提交到远端分支就会出现 冲突。         

- 执行 `git push origin 分支名称`  此时会提示有冲突，远端仓库拒绝我的 push，那么就执行下面的步骤，先 pull 下来

- 执行 `git pull origin 分支名称` 保证当前仓库的代码是最新的

- 执行 `git status`

- 执行 `git add -A`

- 执行 `git status`  

- 执行 `git commit -m"提交信息"`

- 执行 `git push origin 分支名称`
