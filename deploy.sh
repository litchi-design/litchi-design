#!/usr/bin/env sh
# 忽略错误
set -e

# 构建
pnpm docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
# git remote add docs-origin git@github.com:litchi-design/litchi-design.github.io.git
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push docs-origin HEAD:main

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -


#!/usr/bin/env bash

# 判断上条命令是否执行成功，当执行失败的时候显示错误信息，并停止向下执行
# function pauseErr(){
#     if [ $? -ne 0 ];then
#         echo "pause because of failed ; Ctrl + C to exit"
#         #沉睡100秒，以便查看异常信息
#         sleep 100
#         #当调用者使用Ctrl + C打断沉睡之后，直接退出脚本，阻止脚本向下执行
#         exit
#     fi
# }

#获取传入的第一个参数
# params1=$1

# echo "params1= ${params1}"

# 执行一个不存在的任务
# ./gradlew :app:emptyTask -x lint

#调用PauseErr函数判断上条命令是否执行成功
# pauseErr

