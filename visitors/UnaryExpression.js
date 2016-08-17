module.exports = function (node, context) {
  switch (node.operator) {
  case 'typeof':
    context.compile(node.argument);
    context.emit("call primitive typeof");
    break;
  case '-':
    context.compile(node.argument);
    context.emit("push int 0");
    context.emit("math -");
    break;
  default:
    context.error(node, "could not compile unary operator");
  }
}
