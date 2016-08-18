function main() {
  for (i = 0; i < 5; i = i + 1) {
    vm_say("for iteration");
  }
  vm_say("");

  i = 0;
  while (i < 5) {
    vm_say("while iteration");
    i = i + 1;
  }
  vm_say("done");
}
