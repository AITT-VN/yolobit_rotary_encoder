const BlockColor = '#A39400'
Blockly.Blocks['initialise_rotary_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("khởi tạo encoder CLK")
        .appendField(new Blockly.FieldDropdown([["P0","pin0.pin"], ["P1","pin1.pin"], ["P2","pin2.pin"], ["P3","pin3.pin"], ["P4","pin4.pin"], ["P6","pin6.pin"],["P7","pin7.pin"], ["P8","pin8.pin"], ["P9","pin9.pin"], ["P10","pin10.pin"], ["P11","pin11.pin"], ["P12","pin12.pin"], ["P13","pin13.pin"], ["P14","pin14.pin"], ["P15","pin15.pin"], ["P16","pin16.pin"]]), "clk")
        .appendField("DT")
        .appendField(new Blockly.FieldDropdown([["P0","pin0.pin"], ["P1","pin1.pin"], ["P2","pin2.pin"], ["P3","pin3.pin"], ["P4","pin4.pin"], ["P6","pin6.pin"],["P7","pin7.pin"], ["P8","pin8.pin"], ["P9","pin9.pin"], ["P10","pin10.pin"], ["P11","pin11.pin"], ["P12","pin12.pin"], ["P13","pin13.pin"], ["P14","pin14.pin"], ["P15","pin15.pin"], ["P16","pin16.pin"]]), "dt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(BlockColor);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// ["P0","pin0.pin"], ["P1","pin1.pin"], ["P2","pin2.pin"], ["P3","pin3.pin"], ["P4","pin4.pin"], ["P6","pin6.pin"],["P7","pin7.pin"], ["P8","pin8.pin"], ["P9","pin9.pin"], ["P10","pin10.pin"], ["P11","pin11.pin"], ["P12","pin12.pin"], ["P13","pin13.pin"], ["P14","pin14.pin"], ["P15","pin15.pin"], ["P16","pin16.pin"]
Blockly.Blocks['get_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("đọc giá trị encoder");
    this.setOutput(true, "Number");
    this.setColour(BlockColor);
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
    this.setColour(BlockColor);
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
    this.setColour(BlockColor);
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
    this.setColour(BlockColor);
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
