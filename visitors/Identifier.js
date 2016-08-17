module.exports = function (node, context) {
  context.emit("local load " + node.name);
}
