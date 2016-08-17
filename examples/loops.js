function main() {
  for (i = 0; i < 5; i = i + 1) {
    primitive.say("for iteration");
  }
  primitive.say("");

  i = 0;
  while (i < 5) {
    primitive.say("while iteration");
    i = i + 1;
  }
  primitive.say("done");
}
