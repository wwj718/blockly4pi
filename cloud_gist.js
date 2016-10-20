/*
 *
 * 写测试吧
 * 先测试函数
 * 格式化：c-f  使用vim-jsbeautify
 * 编程风格 ： 模块化  函数式
 */


// --------------------js ---------
//kinto-http.js
// 初始化kinto客户端

function kinto_init() {
    var username = "pi";
    var password = "pi";
    var ip = document.getElementById('pi_ip').value;
    const secretString = `${username}:${password}`;
    const kinto_client = new KintoClient(`http://${ip}:8888/v1`, {
        headers: {
            Authorization: "Basic " + btoa(secretString)
        }
    });
    return kinto_client

    //blockly  gist
    //usege
    // kinto_client = kinto_init()
    //create
    // gist = kinto_client.bucket("blockly").collection("gist")
    // gist.createRecord({title: "My first post", content: "Hello World!"})
    //get
    // gist.listRecords().then(result => console(result.data));
}


// 在kinto里创建gist
function create_gist() {
    //获得xml_text
    var xml_text = get_xml_text();
    var kinto_client = kinto_init();
    var gist = kinto_client.bucket("blockly").collection("gist");
    gist.createRecord({
        title: "mytest1",
        content: xml_text
    });
}


// 获取云端gist，回调handle进行处理
function list_gist(handle) { //show_gists
    //获得xml_text
    var xml_text = get_xml_text();
    var kinto_client = kinto_init();
    var gist = kinto_client.bucket("blockly").collection("gist");
    gist.listRecords().then(result => handle(result.data)); //基于事件，而不是序列
}

// 逐个列出gist，作为list_gist的参数（功能函数）
function show_gists(gists) {
    for (let item of gists) {
        console.log(item)
    }
}


// 把gists插入到workspace里 , 作为list_gist的参数（功能函数）
function lastest_gist_insert(gists) {
    //最新的
    content = gists[0].content;
    //console.log(gists[0].content)  //sort: The order field (default: -last_modified)
    set_workspace(content);
}


///////////////////////////
//----------html template ---------

var cloud_button_group_tpl = `
<h1>云端</h1>
<div class="btn-group">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
    云端程序 <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a  id="gist_share" href="#"><span class="glyphicon glyphicon-cloud-upload"></span> 分享当前程序到云端</a></li>
    <li><a  id="get_gist_lastest" href="#"><span class="glyphicon glyphicon-cloud-download"></span>拉取最近上传的程序</a></li>
    <li><a href="#">查看流行程序</a></li>
    <li><a href="#ip:9001/logtail/ngrok">远程控制（协助）</a></li>
    <li class="divider"></li>
    <li><a href="#">进入云中心</a></li>
  </ul>
</div>
`
var cloud_button_group = {};
var render = template.compile(cloud_button_group_tpl);
var cloud_button_group_html = render(cloud_button_group);
document.getElementById('cloud_button_group').innerHTML = cloud_button_group_html;




//////////////////////////

// --------------按钮绑定--------------

// 分析gist到kinto
$("#gist_share").click(function(event) {
    event.preventDefault();
    create_gist();
    swal("分享成功")
})

// 获取最新gist
$("#get_gist_lastest").click(function(event) {
    event.preventDefault();
    list_gist(lastest_gist_insert);
})

/////////////////////模态框
//获取用户数据
// 初始化获得ip
// 上传获得程序名 title  描述 description
// 列出所有程序

function get_title_description(result) {
    //在此可以检验result，使用if分支
    // 如果检验合格则正式发送，否则提示有问题
    console.log(result);
}

function title_prompt() {
    bootbox.setLocale("zh_CN")
    bootbox.prompt({
        size: "small",
        title: "输入程序名?",
        callback: get_title_description //回调成功
    })
}



//http://stackoverflow.com/questions/12527198/passing-data-to-a-jquery-event-handler
//每个事件携带触发者
function print_gist_data() {
  //data = $(this).getAttribute("data")
  //a_target = event.target
  //data = a_target.data
  data = $(this).attr("data"); //this指向调用它的element
  console.log(data)

}


function show_gist_in_model(gists) {
    // 使用模板 for 循环
    //http://v3.bootcss.com/components/#thumbnails-custom-content
    // 可视化模式下  :call RangeHtmlBeautify()
    // test show_gist_in_model([1,2,3,4,5,6])
    var tpl = `
<div class="row">
    {{each gists as value i}}
    <div class="col-md-4">
        <div class="thumbnail">
            <div class="caption">
                <h3>{{value}}</h3>
                <p>...</p>
                <p><a href="#" class="print_gist_data btn btn-primary" data="{{value}}" role="button">获取到本地</a> <!--回调直接绑定函数，打印里边的东西,this,data 在按钮里,gist.title-->
                    <a href="#" class="btn btn-default" role="button">删除</a>
                </p>
            </div>
        </div>
    </div>
    {{/each}}
</div>
  `
    var data = {
        "gists": gists
    }; //list
    var render = template.compile(tpl);
    var html = render(data);
    /*
    bootbox.dialog({
        message: html
    })
    */

    bootbox.alert({
        size: "large",
        title: "云端程序",
        message: html
    })

    $(".print_gist_data").on("click",print_gist_data); //绑定按钮
}


