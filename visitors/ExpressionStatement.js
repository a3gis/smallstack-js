module.exports = function (node, context) {
  context.compile(node.expression);
}
