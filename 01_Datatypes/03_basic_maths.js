/*
  Your task is to create a function that does four basic mathematical operations.

  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.

  Examples(Operator, value1, value2) --> output
  ('+', 4, 7) --> 11
  ('-', 15, 18) --> -3
  ('*', 5, 5) --> 25
  ('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {

  if(!(parseFloat(value1) && parseFloat(value2))){
    return "Please Enter Valid Input...!!!"
  }

  value1 = parseFloat(value1);
  value2 = parseFloat(value2);

  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return eval(value1 + operation + value2);
  }
}

////////////////////////////////////////////////////////////////////////////////////

// function basicOp(operation, value1, value2) {
//   if (!(parseFloat(value1) && parseFloat(value2))) {
//     return "Please Enter Valid Input...!!!";
//   }

//   value1 = parseFloat(value1);
//   value2 = parseFloat(value2);

//   return eval(value1 + operation + value2);
// }

console.log(basicOp("-", "10.54", "10"));
