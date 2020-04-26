面试tips:

一定要注意边界条件！





动态规划；

图；

二叉树；

二叉链表；



c++中的构造函数，析构函数，释放函数

https://www.nowcoder.com/discuss/381025?type=1&order=0&pos=22&page=1 牛客网美团后端开发题；

作者：emptyCoder
链接：https://www.nowcoder.com/discuss/404206
来源：牛客网



```
#include 
#include 
```

 

```
using namespace std;
```

 

```
int` `check(``int` `x, ``int` `k) {
  ``int` `cnt = x;
  ``int` `cur = k;
  ``while``(x/cur) {
    ``cnt += x/cur;
    ``cur *= k;
  ``}
  ``return` `cnt;
}
```

 

```
int` `main() {
  ``int` `n, k;
  ``cin >> n >> k;
  ``int` `low = ``1``;
  ``int` `high = n;
  ``while``(low < high) {
    ``int` `mid = (low + high) >> ``1``;
    ``int` `cur = check(mid, k);
    ``if``(cur >= n) {
      ``high = mid;
//    } else if(cur == n) {
//      ans = mid;
//      break;
//    }
  ``}
    ``else` `{
      ``low = mid+``1``;
    ``}
  ``}
  ``cout << high << endl;
  ``return` `0``;
}
```





















