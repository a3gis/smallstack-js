module.exports = function (node, context) {
  if (isPrimitiveCall(node)) {
    visitPrimitiveCall(node, context);
    return;
  }

  if (node.callee.type === 'Identifier') {
    for (var i = node.arguments.length - 1; i >= 0; i--) {
      context.compile(node.arguments[i]);
      context.emit("push arg");
    }
    context.emit("call " + node.callee.name);
    return;
  }

  context.error(node, "can only compile console.log or top-level function calls :/");
}

function isPrimitiveCall(node) {
  return node.callee.type === 'MemberExpression' &&
         node.callee.object.name === "primitive" &&
         node.callee.property.type === 'Identifier';
}

function visitPrimitiveCall(node, context) {
    for (var i = node.arguments.length - 1; i >= 0; i--) {
      context.compile(node.arguments[i]);
    }
    context.emit("call primitive " + node.callee.property.name);
}
/*
    context.compile(node.arguments[0]);
    context.emit("dup");
    context.emit("call primitive typeof");
    context.emit("push str int");
    context.emit("cmp =");
    context.emit("carry invert");
    context.emit("jump carry $" + context.labelCounter);
    context.emit("convert int str");
    context.emit("$label " + context.labelCounter++);
    */
