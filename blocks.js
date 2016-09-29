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

