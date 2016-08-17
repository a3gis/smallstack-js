module.exports = function (node, context) {
  context.emit("$label " + node.id.name);
  node.params.forEach(function (param) {
    context.emit("local store " + param.name);
  });
  context.compile(node.body);
  context.emit("ret");
}
