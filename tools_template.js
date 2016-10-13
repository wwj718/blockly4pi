/*
test = `
<h1>{{title}}</h1>
<ul>
    {{each list as value i}}
        <li>索引 {{i + 1}} ：{{value}}</li>
    {{/each}}
</ul>
`

  //模板生成
var data = {
	title: '基本例子',
	isAdmin: true,
	list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};

var render = template.compile(test);
var html = render(data);
document.getElementById('mytools').innerHTML = html; //来自另一个文件怎么办

*/

/*todo list
 *
 *
 *
 *
 *
 */

//mytools
var mytools_tpl = `
<h1>工具</h1>

<!-- Single button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    开机自启 <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a id="test2">将程序加入开机自启</a></li>
    <li><a id="stop_auto_process">终止自启程序</a></li>
    <li class="divider"></li>
    <li><a href="#">进入管理中心</a></li>
  </ul>
</div>



<h1>云端</h1>
<div class="btn-group">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
    云端程序 <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">分享当前程序到云端</a></li>
    <li><a href="#">查看流行程序</a></li>
    <li><a href="#ip:9001/logtail/ngrok">远程控制（协助）</a></li>
    <li class="divider"></li>
    <li><a href="#">进入云中心</a></li>
  </ul>
</div>
`

//todo 写渲染函数,模块化

var mytools_data = {};
var render = template.compile(mytools_tpl);
var mytools_html = render(mytools_data);
document.getElementById('mytools').innerHTML = mytools_html;

/*
function request(url) {
    fetch(url).then(function(res) {
      // res instanceof Response == true.
      if (res.ok) {
          console.log(res);
      } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
      }
    }, function(e) {
      console.log("Fetch failed!", e);
    });
}

//fetch不能携带有辨识的
*/


function request(url) {
     //var xmlhttp=new XMLHttpRequest();
     //xmlhttp.open("GET",url,true);//异步,同步是false //跨域
     //xmlhttp.send();
     //只能直接打开了
     var win = window.open(url);
     win.close(); //开启之后关闭
}


//fetch 发送http请求
//todo：以功能命名模块
//监听按钮
$("#stop_auto_process").click(function(event){
  event.preventDefault();
  var pi_ip = $("#pi_ip").val();
  url = `http://pi:pi@${pi_ip}:9001/index.html?processname=codetest&action=stop`
  request(url);
  //swal("ok")
  //提交请求
})
//this
