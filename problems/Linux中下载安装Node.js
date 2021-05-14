Linux中下载Node.js
1、从官网上下载wegt https://nodejs.org/dist/v10.16.2/node-v10.16.2-linux-x64.tar.xz
2、查看是否下载成功 ls
3、将下载包移动到opt目录下 sudo mv node-v10.16.2-linux-x64.tar.xz /opt
4、进入到opt目录下 cd /opt
5、解压文件sudo tar xvf node-v10.16.2-linux-x64.tar.xz
6、改文件名 sudo mv node-v10.16.2-linux-x64 node-v10.16.2
7、配置环境变量：在profile中进行配置：sudo vi /etc/profile
export NODE_HOME=/opt/node-v10.16.2
export PATH=$PATH:/usr/sbin:$NODE_HOME/bin
ESC+(shift+:)+wq 保存结束
8、source /etc/profile
9、测试 node-v 可以查询node版本
10、系统查询变量 more /etc/profile