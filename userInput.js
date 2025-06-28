//shell
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the first number: ", (num1) => {
  r1.question("Enter the second number: ", (num2) => {
    r1.question("Enter the third number: ", (num3) => {
      const sum = Number(num1) + Number(num2) + Number(num3);
      console.log("the sum is", sum);
      r1.close();
    });
  });
});
