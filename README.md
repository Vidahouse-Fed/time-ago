# A simple library to used to format datetime

提取自 Vidahouse 社区中的格式化时间的插件，功能单一，并没有做绑定dom定时刷新的功能。
在社区项目中 数据库返回的是 评论对象、文章对象。其中发表时间为一个Unix时间戳。
有些地方将使用timeago处理过的时间通过 pug渲染。
另外一些地方则通过 React.js 或者 Vue.js 进行绑定。
由于本方法其实很简单，核心不超过20行。
所以只实现一个纯函数，绑定等操作自己进行即可。

    刚刚
    1分钟前
    23分钟前
    1天前
    2天前
    28天前
    5月前
    4年前


## Install

通过npm安装

    npm install time-ago.js
    
或者使用 `script` 引入    
    
    <script src="dist/time-ago.min.js" type="text/javascript"></script>
    
可以使用ES6的 `import` 引入
    
    import timeago from 'time-ago.js';
    
## 使用
    
    timeago(Date.now())  // =>  '刚刚'
    timeago(Date.now(), 'en')  // =>  'just now'
    
    // Unix 时间戳 (s)
    timeago(1462377600)  // =>  '1年前'
    
    // JavaScript 时间戳 (ms)
    timeago(1462377600000)  // =>  '1年前'
  
  
  ## 致谢 
  
  在此，我情不自禁，想背诵一段《共产党宣言》:
  一个幽灵，共产主义的幽灵，在欧洲徘徊。旧欧洲的一切势力，教皇和沙皇、梅特涅和基佐、法国的激进党人和德国的警察，都为驱除这个幽灵而结成了神圣同盟。
