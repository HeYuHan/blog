---
title: Unity5.+ 中Json的使用
#分类
categories: "Unity"
tags:
    - Unity技术
    - Json解析
---
## JsonUtility
``` cs
[System.Serializable]
public class MyClass
{
    //私有变量
    [SerializeField]
    private float privateMember=10;
    //公有变量
    public string publicMember;

}
//序列化
MyClass o1 = new MyClass();
o1.publicMember="wo hao niu bi";
//第二个参数ture会格式化json代码,增加文件大小,但方便阅读
string json = JsonUtility.ToJson(o1,true);
//反序列化,生成新对象
MyClass o2 = JsonUtility.FromJson<MyClass>(json);
//覆盖原对象
MyClass o3 = new MyClass();
JsonUtility.FromJsonOverwrite(json,o3);
```