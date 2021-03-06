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
                .appendField(new Blockly.FieldImage("", 15, 15, "*"))//led图标
                .appendField("Led")
                .appendField("开心") //实际是数字0-9
                .appendField(new Blockly.FieldCheckbox("FALSE"), "happy")
                .appendField("悲伤") //小写字母
                .appendField(new Blockly.FieldCheckbox("FALSE"), "sad")
                .appendField("清理屏幕") //大写字母
                .appendField(new Blockly.FieldCheckbox("FALSE"), "clear")
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
                .appendField("音乐 曲目选择")
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
/*
    Blockly.Blocks['say'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("说话")
                .appendField("内容")
                .appendField(new Blockly.FieldTextInput("1"), "say_content");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['say'] = function(block) {
        var say_content= block.getFieldValue('say_content');
        var code = '';
        code += `pc_client.say(("${say_content}"))\n`; //笑脸 ,库预加载就不需要重复 //unicode的问题,被编码了,在js这里被编码了,js这里变为unicode
        return code;
    };
*/
    //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rsqq9r
    /*
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


*/

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#sg2z4v  新的模板
/*
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

        var code = '';
        code += `import chatbot;response=chatbot.chat("${content}".decode('utf-8'));print(response)\n`; //笑脸 ,库预加载就不需要重复 //unicode的问题,被编码了,在js这里被编码了,js这里变为unicode
        return code;
    };
*/

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
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#a88ugi 完整版
//https://developers.google.com/blockly/guides/configure/web/code-generators
//https://developers.google.com/blockly/guides/create-custom-blocks/generating-code
// https://github.com/google/blockly/blob/master/generators/python/math.js  实际例子 跟踪：math_number
Blockly.Blocks['get_distance'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("获取障碍物距离");
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


/*
 * AI 部分
 */

//与云端ai对话
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#zjo33n
Blockly.Blocks['talk_with_cloud_ai'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("与云端AI对话：")
        .appendField(new Blockly.FieldTextInput("你好"), "cloud_ai_request");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['talk_with_cloud_ai'] = function(block) {
  var text_cloud_ai_request = block.getFieldValue('cloud_ai_request');
  // TODO: Assemble Python into code variable.
  var code = `cloud_ai.get_response("${text_cloud_ai_request}".decode('utf-8'))`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['talk_with_ai'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("与本地AI对话：")
        .appendField(new Blockly.FieldTextInput("你好"), "talk_request");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['talk_with_ai'] = function(block) {
  var talk_request = block.getFieldValue('talk_request');
  // TODO: Assemble Python into code variable.
  var code = `chatbot_client.chat("${talk_request}".decode('utf-8'))\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//train_your_ai
Blockly.Blocks['train_your_ai'] = {
  init: function() {
    this.appendValueInput("your_ai_request")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("", 15, 15, "*"))
        .appendField("提问");
    this.appendValueInput("your_ai_response")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("", 15, 15, "*"))
        .appendField("回答");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['train_your_ai'] = function(block) {
  var value_your_ai_request = Blockly.Python.valueToCode(block, 'your_ai_request', Blockly.Python.ORDER_ATOMIC);
  var value_your_ai_response = Blockly.Python.valueToCode(block, 'your_ai_response', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `chatbot_client.train("${value_your_ai_request} ${value_your_ai_response}".decode('utf-8'))\n`;
  return code;
};



    Blockly.Blocks['say'] = {
        init: function() {
            this.appendValueInput("say_content")
            .setCheck(null)
            .appendField("说话内容");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['say'] = function(block) {
        var say_content = Blockly.Python.valueToCode(block, 'say_content', Blockly.Python.ORDER_ATOMIC);
        var code = '';
        code += `pi_media.say(${say_content})\n`; //笑脸 ,库预加载就不需要重复 //unicode的问题,被编码了,在js这里被编码了,js这里变为unicode
        return code;
    };


Blockly.Blocks['sox_record'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("录音时长:")
        .appendField(new Blockly.FieldNumber(1, 0), "record_time");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}

//play record
Blockly.Python['sox_record'] = function(block) {
  var number_record_time = block.getFieldValue('record_time');
  // TODO: Assemble Python into code variable.
  var code = `pi_media.sox(${number_record_time})\n`;
  return code;
};


// 播放声音
Blockly.Blocks['play_record'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("播放录制的声音");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['play_record'] = function(block) {
  var code = 'pi_media.play()\n';
  return code;
};

//录制红外
Blockly.Blocks['infrared_record'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("录制红外信号")
    .appendField(new Blockly.FieldTextInput(""), "infrared_record");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['infrared_record'] = function(block) {
  var code = 'pi_media.lirc_record()\n';
  return code;
};

//发射红外
Blockly.Blocks['infrared_send'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("发射红外信号");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['infrared_send'] = function(block) {
  var code = 'pi_media.send_infrared()\n';
  return code;
};

//获取温度
Blockly.Blocks['get_temperature'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("获得当前温度");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['get_temperature'] = function(block) {
  var code = 'DHT11.GetResult(output="temperature")'; //湿度 output="humidity" ,默认是温度
  return [code, Blockly.Python.ORDER_ATOMIC];
};


