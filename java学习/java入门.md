java入门：

面向对象，平台无关性，可靠，安全，支持多线程，支持网络编程，编译和解释共存

JVM：Java虚拟机，不同的操作系统使用的都是相同的字节码

.class文件即为字节码，

.java，源代码-->.class，JAM能理解的字节码-->二进制机器码

JIT（just in time compiler）即时编译器



JDK是java开发工具，包括了SDK和Javac（编辑器）和工具

JRE是java运行环境

JSP是Java服务页面

GC是Java的自动内存管理垃圾回收机制

char在Java中占有两个字节



##### java中的常用的类修饰：

public 访问控制符，将类声明为公共类

adstract 抽象类，由子类提供方法实现

final 非继承类，不能被继承

friendly 默认修饰符，只有在相同包中的对象才能使用的类

##### 成员变量修饰符：

public 公共访问控制类 变量是公共的，能被任何对象的方法访问

private 私有访问控制类，指变量只能被自己的类的方法访问

protected 保护访问控制符，变量可以被自己的类和子类访问

friendly 同一个包中的类可以访问，其他包中的类不能访问

final 指变量的指不能变

static 静态修饰符，变量被所有对象都共享

transient 变量是由系统保留的，暂无特别作用的临时性变量

volatile 变量可以同时被多个线程控制和修改

##### 方法修饰符

public 公共控制符

private 私有控制符

protected 保护访问控制符

final 方法不能被重载

static 不需要实例化就能激活的一个方法

synchronize 同步修饰符，运行结束后解锁

native 本地修饰符，此方法的方法体是用其它语言在程序外部编写的



|                      |          |            |          |              |            |           |        |
| -------------------- | -------- | ---------- | -------- | ------------ | ---------- | --------- | :----- |
| 访问控制             | private  | protected  | public   |              |            |           |        |
| 类，方法和变量修饰符 | abstract | class      | extends  | final        | implements | interface | native |
|                      | new      | static     | strictfp | synchronized | transient  | volatile  |        |
| 程序控制             | break    | continue   | return   | do           | while      | if        | else   |
|                      | for      | instanceof | switch   | case         | default    |           |        |
| 错误处理             | try      | catch      | throw    | throws       | finally    |           |        |
| 包相关               | import   | package    |          |              |            |           |        |
| 基本类型             | boolean  | byte       | char     | double       | float      | int       | long   |
|                      | short    | null       | true     | false        |            |           |        |
| 变量引用             | super    | this       | void     |              |            |           |        |
| 保留字               | goto     | const      |          |              |            |           |        |

Java 里使用 long 类型的数据一定要在数值后面加上 **L**，否则将作为整型解析

java的每种数据类型都提供了对应的包装器类型

