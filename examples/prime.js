// Returns a module b (a % b)
function mod(a, b) {
  while (a >= b) {
    a = a - b;
  }
  return a;
}

// Checks if a number is prime
function isPrime(n) {
  for (i = 2; i < n; i = i + 1) {
    if (mod(n, i) == 0) {
      return 0;
    }
  }
  return 1;
}

function main() {
  for (n = 2; n < 100; n = n + 1) {
    if (isPrime(n)) {
      log(concat(n, " is prime"));
    }
  }
}

// Utility functions
function log(value) {
  if (typeof value == 'int') {
    value = primitive.int2str(value);
  }
  primitive.say(value);
}

function concat(a, b) {
  if (typeof a == 'int') {
    a = primitive.int2str(a);
  }
  if (typeof b == 'int') {
    b = primitive.int2str(b);
  }
  return primitive.concat(a, b);
}
