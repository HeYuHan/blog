---
title: linux 双网卡NAT共享外网给局域网
#分类
categories: "Linux"
tags:
    -网络配置
---
eth0(外网):115.159.21.23
eth1(内网):192.168.1.1
将内网的请求转发给外网,以达到共享外面的目的
## 配置系统转发
### 启用IPv4转发
``` bash
# 临时启用
echo 1 > /proc/sys/net/ipv4/ip_forward
# 永久启用
vi /etc/sysctl.conf
# 启用转发 net.ipv4.ip_forward=1
# 生效
sysctl -p
```
## 配置网卡
### 配置外网卡 建立NAT伪装
``` bash
#允许所有网段
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
#允许特定网段
iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE

```
### 保存iptables 配置
``` bash
service iptables save
```
## 配置客户机
IP：192.168.1.x/24 
GATEWAY(服务器的IP)：192.168.1.1
DNS(与服务器的一致):8.8.8.8 114.114.114.114

## 高级用法
### 控制特定MAC地址访问
``` bash
#######仅控制外网#######
#限制:
iptables -A FORWARD -m mac --mac-source xx:xx:xx:xx:xx:xx -j DROP  
#解封：  
iptables -D FORWARD -m mac --mac-source xx:xx:xx:xx:xx:xx -j DROP
#######控制所有#######
#限制: 
iptables -A INPUT -m mac --mac-source xx:xx:xx:xx:xx:xx -j DROP  
#解封：  
iptables -A INPUT -m mac --mac-source xx:xx:xx:xx:xx:xx -j DROP
```

### 控制特定IP地址访问
``` bash
#######仅控制外网#######
#限制:
iptables -A FORWARD -s 192.168.0.x -j DROP 
#解封：  
iptables -D FORWARD -s 192.168.0.x -j DROP  
#######控制所有#######
#限制: 
iptables -A INPUT -s 192.168.0.x -j DROP    
#解封：  
iptables -D INPUT -s 192.168.0.x -j DROP 
```
### 查看所有规则
``` bash
iptables -L  
#或者：  
cat /etc/sysconfig/iptables
```

参考连接 http://blog.csdn.net/cjy37/article/details/7104898