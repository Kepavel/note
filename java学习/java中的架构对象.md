java中的架构对象：

1. <font color='cornflowerblue'>PO</font>(persistant object) <font color='red'>持久对象</font>：通常是使用Hibernate生成PO，与数据库中的表相映射的Java对象
2. <font color='cornflowerblue'>VO</font>(value object) <font color='red'>值对象</font>：抽象出来的业务对象，可以和表对应，也可以不对应
3. <font color='cornflowerblue'>DAO</font>(Data Access Objects) <font color='red'>数据访问对象接口</font>：在数据库与业务逻辑之间
4. <font color='cornflowerblue'>BO</font>(Business Object) <font color='red'>业务对象层</font>：应用程序领域的事物的所有实体类，这些实体类都留在服务器中，利用服务类协助完成职责
5. <font color='cornflowerblue'>POJO</font>(Plain Old Java Object)<font color='red'>简单的Java对象</font>：即JavaBeans，不允许由业务方法，也不能携带connection之类的方法



<font color='orange'>PO只能用在数据层，而VO可以用在商业逻辑层和表示层。每层操作自己的数据对象，降低各层之间的耦合，便于系统的维护和扩展</font>

<font color='cornflowerblue'>DAO模式，是将底层数据访问操作和上层的商务逻辑分开</font>

<font color='cornflowerblue'>包括了：</font>

1. <font color='cornflowerblue'>DAO工厂类</font>

2. <font color='cornflowerblue'>DAO接口</font>

3. <font color='cornflowerblue'>实现DAO接口的具体类</font>

4. <font color='cornflowerblue'>数据传递对象</font>

