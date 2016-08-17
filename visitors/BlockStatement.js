module.exports = function (node, context) {
  node.body.forEach(function (stm) {
    context.compile(stm);
  });
}
