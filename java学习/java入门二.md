java中的return：直接使用return 结束方法的运行，用于没有返回值函数的方法

两种浮点数类型的包装类Float，Double没有实现常量池技术



int 32位

short 16位

char 16位，初始值是 ‘u0000’

float 32位，默认值是‘0f’

double 64位，默认值是‘0d’

boolean 1位，默认值是‘false'

long 64位，默认值是’0l' 一定要在数值的后面加上l

Java 中的拆箱与装箱

integer、short、byte、char、long实现valueof()的方式是类似的

double、float实现的valueof()是类似的，没有常量池技术

<font color='cornflowerblue'>装箱过程是调用包装器的valueof方法实现，拆箱过程是调用包装器的XXXvalue方法实现的</font>

<font color='red'>==</font>运算符的两个操作数都是包装器类型的引用，是比较指向的是否是同一对象，而如果其中一个操作数是表达式，则比较的是数值<font color='red'>触发自动拆箱的过程</font>



对于包装器的类型<font color='cyan'>equals方法</font>不会进行类型转换

装箱的过程是：

integer i1=Integer.valueOf();

创建新对象：

integer i1=new integer();

