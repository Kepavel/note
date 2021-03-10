###### <font color='cornflowerblue'>LinkedHashMap和HashMap的区别</font>

<font color='orange'>LinkedHashMap</font>：是HashMap的一个子类，保存了记录的插入顺序

遍历过程是比HashMap要慢的，且遍历的过程与实际数据有关，和容量无关

<font color='orange'>HashMap</font>：是最常用的Map，根据键的HashCode值存储对象，根据键可以直接获取它的值，且具有很快的访问速度

hashmap不支持线程同步，任意时刻可以有多个线程同时写HashMap，导致数据不一致，

<font color='orange'>Hashtable</font>：支持线程同步，写入较慢