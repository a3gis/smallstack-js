function main() {
  log(concat("The gcd of 9 and 6 is ", gcd(9, 6)));
}

function gcd(a, b) {
  if (b == 0) {
    return a;
  }

  return gcd(b, mod(a, b));
}

function mod(a, b) {
  while (a >= b) {
    a = a - b;
  }
  return a;
}


// Utility functions
function log(value) {
  if (typeof value == 'int') {
    value = vm_int2str(value);
  }
  vm_say(value);
}

function concat(a, b) {
  if (typeof a == 'int') {
    a = vm_int2str(a);
  }
  if (typeof b == 'int') {
    b = vm_int2str(b);
  }
  return vm_concat(a, b);
}
