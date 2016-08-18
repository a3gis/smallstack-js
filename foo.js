function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n-1);
}

function fibonacci(a, b, n) {
  if (n == 0) {
    return a;
  }
  return fibonacci(b, a + b, n - 1);
}

function add(x, y) {
  return x + y;
}

function main() {
  log(factorial(5));
  log(fibonacci(0, 1, 7));
  log(-8 + 2);
  log("hello, world!! :)");
}

function log(value) {
  if (typeof value == 'int') {
    value = vm_int2str(value);
  }
  vm_say(value);
}
