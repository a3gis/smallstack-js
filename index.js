var esprima = require('esprima');

var chunks = [];

process.stdin
    .on("data", function(chunk) { chunks.push(chunk); })
    .on("end", function() { processSource(chunks.join('')); })
    .setEncoding("utf8");

function processSource(source) {
  var ast = esprima.parse(source, { loc: true });
  var context = new Context();
  context.compile(ast);
  console.log(context.assembly);
}

function Context() {
  this.assembly = "";
  this.labelCounter = 0;
  this.callCounter = 0;
  this.localPrefixes = [];
}

Context.prototype.local = function (name) {
  return (this.localPrefixes[0] || '') + name;
}

Context.prototype.emit = function (instr) {
  this.assembly += instr + "\n";
}

Context.prototype.compile = function (node) {
  require('./visitors/' + node.type)(node, this);
}

Context.prototype.error = function (node, message) {
  var loc = node.loc.start.line.toString() + ":" + node.loc.start.column.toString();
  throw new Error(loc + " " + message);
}
