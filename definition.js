Blockly.Blocks['initialise_rotary_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("khởi tạo encoder CLK")
        .appendField(new Blockly.FieldDropdown([["P0","32"], ["P1","33"], ["P2","27"], ["P3","13"], ["P4","15"], ["P6","12"],["P7","25"], ["P8","17"], ["P9","16"], ["P10","26"], ["P11","14"], ["P12","2"], ["P13","18"], ["P14","19"], ["P15","23"], ["P16","5"], ["P19","22"], ["P20","21"]]), "clk")
        .appendField("DT")
        .appendField(new Blockly.FieldDropdown([["P0","32"], ["P1","33"], ["P2","27"], ["P3","13"], ["P4","15"], ["P6","12"],["P7","25"], ["P8","17"], ["P9","16"], ["P10","26"], ["P11","14"], ["P12","2"], ["P13","18"], ["P14","19"], ["P15","23"], ["P16","5"], ["P19","22"], ["P20","21"]]), "dt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(#A39400);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("đọc giá trị encoder");
    this.setOutput(true, "Number");
    this.setColour(#A39400);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_range_value'] = {
  init: function() {
    this.appendValueInput("min")
        .setCheck(null)
        .appendField("đặt khoảng giá trị cho encoder min");
    this.appendDummyInput();
    this.appendValueInput("max")
        .setCheck(null)
        .appendField("max");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(#A39400);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rotary_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("đặt chế độ xoay cho rotary")
        .appendField(new Blockly.FieldDropdown([["không giới hạn"," RotaryIRQ.RANGE_UNBOUNDED"], ["reset khi quay tới max","RotaryIRQ.RANGE_WRAP"], ["dừng tăng khi quay tới max","RotaryIRQ.RANGE_BOUNDED"]]), "mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(#A39400);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_current_value'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("đặt giá trị hiện tại cho encoder");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(#A39400);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.addReservedWords('rotary');

Blockly.Python['initialise_rotary_encoder'] = function(block) {
Blockly.Python.definitions_['import_rotary'] = 'from rotary import RotaryIRQ';
  var dropdown_clk = block.getFieldValue('clk');
  var dropdown_dt = block.getFieldValue('dt');
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder = RotaryIRQ(pin_num_clk=' + dropdown_clk + ', pin_num_dt=' + dropdown_dt + ', min_val=0, max_val=10, reverse=True, range_mode=RotaryIRQ.RANGE_UNBOUNDED, pull_up=False)\n'
  return code;
};

Blockly.Python['get_value'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "rotary_encoder.value()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_range_value'] = function(block) {
  var value_min = Blockly.Python.valueToCode(block, 'min', Blockly.Python.ORDER_ATOMIC);
  var value_max = Blockly.Python.valueToCode(block, 'max', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(min_val=' + value_min + ', max_val=' +  value_max + ', range_mode=RotaryIRQ.RANGE_WRAP)\n';
  return code;
};

Blockly.Python['rotary_mode'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(range_mode=' + dropdown_mode + ')\n';
  return code;
};

Blockly.Python['set_current_value'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(value=' + value_value + ')\n';
  return code;
};
