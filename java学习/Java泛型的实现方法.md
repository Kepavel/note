##### Java泛型的实现方法：

1. 原始类型相同
2. 通过反射添加其它类型的元素

```
package com.company;

import java.util.ArrayList;

public class Main {
//类型泛化
    public static void main(String[] args) throws Exception {
   // write your code here
        ArrayList<String> list1 =new ArrayList<String>();
        list1.add("abc");

        ArrayList<Integer> list2= new ArrayList<Integer>();
        list2.add(123);
        //反射调用List2
        list2.getClass().getMethod("add",Object.class).invoke(list2, "asd");
        System.out.println(list1.getClass() == list2.getClass());
        for(int i=0;i<list2.size();i++)
        {
            System.out.println(list2.get(i));
        }
    }
}
```

调用泛型方法时，可以指定泛型，也可以不指定泛型：

###### 不指定泛型时，泛型变量的类型时该方法中的几种类型的同一父类的最小级，直到Object

###### 指定泛型时，该方法的几种类型必须是该泛型的实例的类型或者其子类

public class Pair<T extends Comparable>{}



