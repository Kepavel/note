那么打开D:\Anaconda3\envs\tensorflow\Lib\site-packages\tensorflow\python\platform\**build_info.py**这个文件，可以看到使用的CUDA 9.0和cuDNN 7：

import tensorflow as tf
 tf.compat.v1.disable_eager_execution()　＃保证sess.run()能够正常运行
 hello = tf.constant('hello,tensorflow')
 sess= tf.compat.v1.Session()＃版本2.0的函数
 print(sess.run(hello))
 -------这样就解决了