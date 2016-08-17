module.exports = function (node, context) {
  context.emit("$label " + node.id.name);
  context.localPrefixes.unshift(node.id.name + '_');

  node.params.forEach(function (param) {
    context.emit("local store " + context.local(param.name));
  });

  context.compile(node.body);
  context.localPrefixes.shift();
  context.emit("ret");
}
