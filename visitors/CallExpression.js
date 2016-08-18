module.exports = function (node, context) {
  if (node.callee.type !== 'Identifier') {
    context.error(node, "can only compile Identifier function calls");
  }

  if (node.callee.name.startsWith('vm_')) {
    for (var i = node.arguments.length - 1; i >= 0; i--) {
      context.compile(node.arguments[i]);
    }
    context.emit("call primitive " + node.callee.name.slice(3));
    return;
  }

  if (node.callee.name === 'asm') {
    context.emit(node.arguments[0].value);
    return;
  }

  for (var i = node.arguments.length - 1; i >= 0; i--) {
    context.compile(node.arguments[i]);
    context.emit("push arg");
  }
  context.emit("call " + node.callee.name);
  return;
}
