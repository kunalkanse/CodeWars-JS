/*
    Input: Array of elements

    ["h","o","l","a"]

    Output: String with comma delimited elements of the array in th same order.

    "h,o,l,a"

    Note: if this seems too simple for you try the next level
    Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
*/


const printArray = array => array.join();

const str1 = printArray(["h","o","l","a"]);
console.log(str1);

const str2 = printArray([[1, 2, 3], [4, 5, 6]]);
console.log(str2);

const str3 = printArray([{a: 1, b: 2}, {c: 3, d: 4}]);
console.log(str3);