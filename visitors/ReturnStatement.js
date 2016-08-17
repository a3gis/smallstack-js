module.exports = function (node, context) {
  context.compile(node.argument);
  context.emit("ret val");
}
