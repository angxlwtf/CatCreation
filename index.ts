import { Cat, Dog, Snake } from "./Animals";
import { Animal, Person } from "./Classes";
import * as readline from "readline"; // User input

let animals: Animal[] = [];
let angxl: Person = new Person("angxl wtf", 14); // Creation of me (ebic)

angxl.talk("Welcome to my Cat Creation Simulator (aka learning how to use TypeScript)");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\nPlease pick the name of new your cat!", function (answer) {
  if (answer != "") {
    let cat = new Cat(answer);
    cat.talk("Meow!");
    rl.close();
  }else{
    console.log("That is not a real name!");
    rl.close();
  }
});