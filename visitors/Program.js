module.exports = function (node, context) {
  node.body.map(function (stm) {
    context.compile(stm);
  });
}
