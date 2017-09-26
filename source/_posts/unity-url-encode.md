---
title: Unity www无法加载中文路径的问题。
date: 2017-09-26 13:20:32
categories: "Unity"
tags:
    - URL 编码解码
---
#问题描述
unity www在下载含有中文路径的文件时会下载失败，此时对路径进行url编码即可
```c#
    string url = file:///文件夹/file.txt
    //编码
    url = WWW.EscapeURL(url);
    //解码
    url = WWW.UnEscapeURL(url);
```
