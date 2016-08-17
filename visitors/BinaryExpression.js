module.exports = function (node, context) {
  switch (node.operator) {
  case "+":
  case "-":
  case "*":
    context.compile(node.right);
    context.compile(node.left);
    context.emit("math " + node.operator);
    break;
  case ">":
  case ">=":
  case "<":
  case "<=":
  case "==":
    context.compile(node.right);
    context.compile(node.left);
    context.emit("cmp " + (node.operator === '==' ? '=' : node.operator));
    context.emit("jump carry $" + context.labelCounter);
    context.emit("push int 0");
    context.emit("jump always $" + (context.labelCounter + 1));
    context.emit("$label " + context.labelCounter++);
    context.emit("push int 1");
    context.emit("$label " + context.labelCounter++);
    break;
  default:
    context.error(node, "could not compile binary expression");
  }
}
