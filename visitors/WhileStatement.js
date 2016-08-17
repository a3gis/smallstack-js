module.exports = function (node, context) {
  var startLabel = context.labelCounter++;
  var endLabel = context.labelCounter++;

  context.emit("$label " + startLabel);
  context.compile(node.test);
  context.emit("push int 0");
  context.emit("cmp =");
  context.emit("jump carry $" + endLabel);
  context.compile(node.body);
  context.emit("jump always $" + startLabel);
  context.emit("$label " + endLabel);
}
