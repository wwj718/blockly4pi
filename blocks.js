//todo 使用工厂工具: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
//todo : 打造案例
// 如果算对就笑脸
//
// ─── ALPHABET ───────────────────────────────────────────────────────────────────
//


    Blockly.Blocks['alphabet'] = {
        init: function() {
            this.appendDummyInput()
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
            this.setTooltip('');
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
