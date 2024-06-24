
/*
  This time we want to write calculations using functions and get the results. Let's have a look at some examples:

  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3
  Requirements:

  There must be a function for each number from 0 ("zero") to 9 ("nine")
  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
  Each calculation consist of exactly one operation and two numbers
  The most outer function represents the left operand, the most inner function represents the right operand
  Division should be integer division. For example, this should return 2, not 2.666666...:
  eight(dividedBy(three()));
*/


let zero = (operation) => operation ? operation(0) : 0;
let one = (operation) => operation ? operation(1) : 1;
let two = (operation) => operation ? operation(2) : 2;
let three = (operation) => operation ? operation(3) : 3;
let four = (operation) => operation ? operation(4) : 4;
let five = (operation) => operation ? operation(5) : 5;
let six = (operation) => operation ? operation(6) : 6;
let seven = (operation) => operation ? operation(7) : 7;
let eight = (operation) => operation ? operation(8) : 8;
let nine = (operation) => operation ? operation(9) : 9;

let plus = a => b => b + a;
let minus = a => b => b - a;
let times = a => b => b * a;
let devidedBy = a => b => Math.floor(b / a);

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(devidedBy(two()))); // must return 3

/*
function zero(operation) {
  if(operation){
   return operation(0);
 }else{
   return 0;
 }    
}
function one(operation) {
  if(operation){
   return operation(1);
 }else{
   return 1;
 }    
}
function two(operation) {
  if(operation){
   return operation(2);
 }else{
   return 2;
 }    
}
function three(operation) {
  if(operation){
   return operation(3);
 }else{
   return 3;
 }    
}
function four(operation) {
  if(operation){
   return operation(4);
 }else{
   return 4;
 }    
}
function five(operation) {
  if(operation){
    debugger;
   return operation(5);
 }else{
  debugger;
   return 5;
 }    
}
function six(operation) {
 if(operation){
   return operation(6);
 }else{
   return 6;
 }    
}
function seven(operation) { 
  debugger;
 if(operation){
  debugger;
   return operation(7);
 }else{
  debugger;
   return 7;
 }    
}
function eight(operation) {
  if(operation){
   return operation(8);
 }else{
   return 8;
 }    
}
function nine(operation) {
  if(operation){
   return operation(9);
 }else{
   return 9;
 }    
}

function plus(a) {
 return function(b){
   return b + a;
 }
}

function minus(a) {
 return function(b){
   return b - a;
 }
}

function times(a) {
  debugger;
 return function(b){
  debugger;
   return b * a;
 }
}

function dividedBy(a) {
 return function(b){
   return Math.floor(b / a);
 }
}

debugger;
console.log(seven(times(five())));


// EXECUTION FLOW
///////////////////////////////////////////////
// 1)  console.log(seven(times(5)))

   2) console.log(seven(function(b){
        debugger;
        return b * 5;
      }))

  3) console.log(seven(function(7)));

  4) console.log(seven( return 7 * 5));

  5) console.log(seven( return 35));

  6) console.log(35)
//////////////////////////////////////////////
*/