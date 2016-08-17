module.exports = function (node, context) {
  context.emit("local load " + context.local(node.name));
}
