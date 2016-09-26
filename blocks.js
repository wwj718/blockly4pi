//todo 使用工厂工具: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
//todo 添加工具组:https://developers.google.com/blockly/guides/configure/web/toolbox
//
// ─── ALPHABET ───────────────────────────────────────────────────────────────────
//


    Blockly.Blocks['alphabet'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Alphabet")
                .appendField("笑一个") //实际是数字0-9
                .appendField(new Blockly.FieldCheckbox("FALSE"), "numbers")
                .appendField("清理屏幕") //小写字母
                .appendField(new Blockly.FieldCheckbox("FALSE"), "lowercase")
                .appendField("播放声音") //大写字母
                .appendField(new Blockly.FieldCheckbox("FALSE"), "uppercase")
                .appendField("Other")
                .appendField(new Blockly.FieldTextInput(""), "other");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://code.pkmooc.com/');
        }
    };
    Blockly.Python['alphabet'] = function(block) {
        var checkbox_numbers = block.getFieldValue('numbers') == 'TRUE';
        var checkbox_lowercase = block.getFieldValue('lowercase') == 'TRUE';
        var checkbox_uppercase = block.getFieldValue('uppercase') == 'TRUE';
        var text_other = block.getFieldValue('other');

        var code = '';
        //变为单行python代码
        //todo：整合既有代码
        if ( checkbox_numbers ) { code += 'import smile;smile.draw_smile()\n' }; //亮灯 //这里加入python代码
        if ( checkbox_lowercase ) { code += 'import smile;smile.clear()\n' }; //播放声音
        if ( checkbox_uppercase ) { code += 'A-Z' };

        //跑一个函数，发送代码
        wwjtest(code); //ok
        return code;
        //return '[' + 'wwj' + ']';
    };

//
