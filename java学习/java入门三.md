1. Java中的字符串更像是char*指针

String s 的方法有：

s.equals(t) 和s.compareTo() 区别于 =,指向同一个对象的话就是=

s.length()

s.equalsIgnore(): 忽略大小写





2. StringBuilder:

StringBuilder builder =new StringBuilder();

String s1=builder.toString();

String s2=builder.insert(int, char/String)

void setCharAt(int, char)





3. 输入输出：Scanner(在java.util包中)

   Scanner in = new Scanner(System.in);

   in.nextLine(); //将输入一行

   next(); //输入行中含有空格，读取单词

   nextInt()；//读取整数；

   nextDouble(); //读取浮点数；

   

   4.  Console 类是实现控制台读取密码

      Console cons = System.console();

      String username =cons.readLine("User name: ");

      char[] passwd =cons.readPassword("Password: ");

   

   5. 文件输入输出：

      Scanner in = new Scanner(Paths.get("c:\\\mydirectory\\\myfile.txt"));//读文件

      PrintWriter out = new PrintWriter("c:\\\mydirectory\\\myfile.txt");//写文件

      String dir= Syetem.getProperty("user.dir");//找到路径的位置

   6. 多重选择语句：switch语句；Scanner in= new Scanner(System.in)

      switch(choice){ case 1: ... break; case 2: ... break; default: ... break;}

      choice 可以是char, byte, short, int 或者是String

   

   直接Break到循环外：read_data:{{}{{break read_data;}}}只能跳出语句块，不能进入

   continue是跳到循环的首部

   7. 大数值：BigInteger a = BigInteger.valueOf(100);//将100转换为大数值

   BigInteger c =a.add(b);// a.multiply(BigInteger.valueOf(2));     加乘需要使用add和multiply方法

   8. 数组：int[] a =new int [n]//n可以是变量

   9. for each循环：

   for(int element : a)  

   System.out.println(element);

   "循环a中的每一个元素，并且换行输出"，不需要使用下标值

   Arrays数组中的toString方法，调用Arrays.toString(a)

   

   10.  数组长度为0，不等于null

   int[] smallPrimes ={2,3,4,5};

   new int[] {2,3,4,5};//初始化匿名数组

   smallPrimes =new int[]{2,3,4,50};

   

   11. 数组拷贝，int[] luckyNumbers = smallPrimes; luckyNumbers[5]=12; 则smallPrimes[5]也是12；

   

   

   

   

   

   

