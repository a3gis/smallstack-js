module.exports = function (node, context) {
  switch (node.operator) {
  case '=':
    if (node.left.type !== 'Identifier') {
      context.error(node, "can only assign to Identifier");
    }

    context.compile(node.right);
    context.emit("local store " + node.left.name);
    break;
  default:
    context.error(node, "could not compile assignement");
  }
}
