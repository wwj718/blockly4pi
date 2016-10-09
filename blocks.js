//todo 使用工厂工具: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
//todo : 打造案例
// 如果算对就笑脸
//
// 设计参考：https://blockly.webduino.io/
// http://ozoblockly.com/editor  ui微调
//
//细化的定制：
//https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
//
//添加小图标：暂时使用http://ozoblockly.com/media/inline-block-icons/color-LED-yellow.svg   http://ozoblockly.com/editor
// ─── ALPHABET ───────────────────────────────────────────────────────────────────
//

    'use strict';
    Blockly.Blocks['alphabet'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))//led图标
                .appendField("Led")
                .appendField("开心") //实际是数字0-9
                .appendField(new Blockly.FieldCheckbox("FALSE"), "happy")
                .appendField("悲伤") //小写字母
                .appendField(new Blockly.FieldCheckbox("FALSE"), "sad")
                .appendField("清理屏幕") //大写字母
                .appendField(new Blockly.FieldCheckbox("FALSE"), "clear")
                .appendField("pi_ip")
                .appendField(new Blockly.FieldTextInput("192.168.0.127"), "pi_ip");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('led灯');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['alphabet'] = function(block) {
        var checkbox_numbers = block.getFieldValue('happy') == 'TRUE';
        var checkbox_lowercase = block.getFieldValue('sad') == 'TRUE';
        var checkbox_uppercase = block.getFieldValue('clear') == 'TRUE';
        var pi_ip = block.getFieldValue('pi_ip');

        var code = '';
        //变为单行python代码
        //todo：整合既有代码
        if ( checkbox_numbers ) { code += 'import smile;smile.draw_smile()\n' }; //笑脸 ,库预加载就不需要重复
        if ( checkbox_lowercase ) { code += 'import smile;smile.draw_sad()\n' };
        if ( checkbox_uppercase ) { code += 'import smile;smile.clear()\n' };

        //跑一个函数，发送代码
        return code;
    };

//
//
//-------------------- beep
//
    Blockly.Blocks['beep'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage("http://edx-murp.qiniudn.com/favicon.ico", 15, 15, "*"))//murp 图标
                .appendField("Beep")
                .appendField("music_num")
                .appendField(new Blockly.FieldTextInput("1"), "music_num");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['beep'] = function(block) {
        var music_num= block.getFieldValue('music_num');

        var code = '';
        //变为单行python代码
        //todo：整合既有代码
        code += `import beep;beep.play_music(${music_num})\n`; //笑脸 ,库预加载就不需要重复

        //跑一个函数，发送代码
        return code;
    };

    Blockly.Blocks['say'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Say")
                .appendField("content")
                .appendField(new Blockly.FieldTextInput("1"), "content");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['say'] = function(block) {
        var content= block.getFieldValue('content');
        //unicode_content = toUnicode(content)
        unicode_content = content
        //"\u4F60\u597D" python中是str,解码为unicode

        var code = '';
        //变为单行python代码
        //todo：整合既有代码
        code += `import pc_client;pc_client.say(("${unicode_content}"))\n`; //笑脸 ,库预加载就不需要重复 //unicode的问题,被编码了,在js这里被编码了,js这里变为unicode
        //独立作为一个变量传递

        //跑一个函数，发送代码
        return code;
    };
    //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ncsz63
    Blockly.Blocks['train_your_ai'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("训练ai")
                .appendField("content")
                .appendField(new Blockly.FieldTextInput("对话"), "content");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['train_your_ai'] = function(block) {
        var content= block.getFieldValue('content');
        //unicode_content = toUnicode(content)
        unicode_content = content
        //"\u4F60\u597D" python中是str,解码为unicode

        var code = '';
        //变为单行python代码
        //todo：整合既有代码
        code += `import chatbot;chatbot.train("${unicode_content}".decode('utf-8'))\n`; //笑脸 ,库预加载就不需要重复 //unicode的问题,被编码了,在js这里被编码了,js这里变为unicode
        //独立作为一个变量传递

        //跑一个函数，发送代码
        return code;
    };

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#sg2z4v  新的模板

Blockly.Blocks['talk_with_ai'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("你说") //输出
                .appendField("content")
                .appendField(new Blockly.FieldTextInput("query"), "content");
            //this.appendValueInput('VALUE').setCheck(['String', 'Array']);
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['talk_with_ai'] = function(block) {
        var content= block.getFieldValue('content');
        //unicode_content = toUnicode(content)
        //"\u4F60\u597D" python中是str,解码为unicode

        var code = '';
        //变为单行python代码
        //todo：整合既有代码
        //需要一个list,数组
        //切割空格,变为数组
        //"Hello awesome, world!".split(/\s+/) //["Hello", "awesome", "world!"]
        //切割一个或多个空格
        //假设传进去的就是纯文本好了
        //作为一个返回值
        code += `import chatbot;response=chatbot.chat("${content}".decode('utf-8'));print(response)\n`; //笑脸 ,库预加载就不需要重复 //unicode的问题,被编码了,在js这里被编码了,js这里变为unicode
        //独立作为一个变量传递

        //跑一个函数，发送代码
        return code;
    };


/*
function toUnicode(theString) {
  var unicodeString = '';
  for (var i = 0; i < theString.length; i++) {
    var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode;
    }
    theUnicode = '\\u' + theUnicode;
    unicodeString += theUnicode;
  }
  return unicodeString;
}
*/

//写一个只有输出的块：获取障碍物距离（超声波传感器）
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3f2ous
//https://developers.google.com/blockly/guides/configure/web/code-generators
//https://developers.google.com/blockly/guides/create-custom-blocks/generating-code
// https://github.com/google/blockly/blob/master/generators/python/math.js  实际例子 跟踪：math_number
Blockly.Blocks['get_distance'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("get_distance");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['get_distance'] = function(block) {
  // TODO: Assemble Python into code variable.
  // distance 全局,得到的是代码，需要代码编译完才是想要的,赋值给变量
  var code = 'distance.get_distance()';
  //这里有个层次的问题，如何获得另一个语言里的变量,如何输出为数字
  //硬件的输出如何变为一个块 可被其他读取,并没有对接到其他部分,不能是python代码
  // TODO: Change ORDER_NONE to the correct strength.
  // 需要回传数值，用于变量
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//sleep
//输入为数字的模块
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ytviqi
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8vwuu3
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ndieuv 图标

Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("休眠时间")
        .appendField(new Blockly.FieldNumber(1, 0), "mytime");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}

Blockly.Python['time_sleep'] = function(block) {
  var number_mytime = block.getFieldValue('mytime');
  // TODO: Assemble Python into code variable.
  var code = `import time;time.sleep(${number_mytime})\n`;
  return code;
};

//发送邮件
Blockly.Blocks['send_email'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("报警模块 >  邮箱地址：")
        .appendField(new Blockly.FieldTextInput("code@pkmooc.com"), "email");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['send_email'] = function(block) {
  var text_email = block.getFieldValue('email');
  // TODO: Assemble Python into code variable.
  var code = `send_emails.send_mail(["${text_email}",])\n`;
  return code;
};
