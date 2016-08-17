module.exports = function (node, context) {
  if (typeof node.value === 'number') {
    if (!isInteger(node.value)) {
      context.error(node, "could not compile non-integer literal");
    }
    context.emit("push int " + node.value.toString());
    return;
  }
 
  if (typeof node.value === 'string') {
    context.emit("push str " + node.value);
    return;
  } 

  context.error(node, 'cannot compile literal');
}

function isInteger(n) {
    return n === +n && n === (n|0);
}
