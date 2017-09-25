---
title: C++/C获取本机IP
date: 2017-09-25 12:59:02
categories: "C/C++"
tags:
    - 网络配置
---
``` c
    //主机名
    char hostName[100]={0};
    gethostname(hostName,sizeof(hostName));
    //ip
    hostent* hn;
    hn = gethostbyname(hostName);
    std::string ip=inet_ntoa(*(struct in_addr*)hn->h_addr_list[0]);
```
