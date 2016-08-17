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
      log(n);
    }
  }
}

// Utility function
function log(value) {
  if (typeof value == 'int') {
    value = primitive.convert('int', 'str', value);
  }
  primitive.say(value);
}

