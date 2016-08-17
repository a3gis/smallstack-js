module.exports = function (node, context) {
  context.compile(node.test);
  context.emit("push int 0");
  context.emit("cmp =");

  var alternateLabel = context.labelCounter++;
  var endLabel = context.labelCounter++;

  context.emit("jump carry $" + alternateLabel);
  context.compile(node.consequent);
  context.emit("jump always $" + endLabel);

  context.emit("$label " + alternateLabel); 
  if (node.alternate !== null) {
    context.compile(node.alternate);
  }
  context.emit("$label " + endLabel); 
}
