// Assignment no 24

//Equality and Inequality Test 1.
console.log("equality test with string: ", "Apple" === "Apple");

//Equality and Inequality Test 2.
console.log("inequality test with string: ", ("Apple" as string) != "orange");

// Use lower case functions.
console.log("Lower case function test: ", "HELLO".toLocaleLowerCase() === "hello");

//Numerical test involving equality 
console.log("equality test with numbers: ", 72 === 72);

//Numerical test involving inequality
console.log("Inequality test with numbers: ", (72 as number) != 93);

//graeter then test
console.log("greater then test: ", 24 > 9);

//Less then test
console.log("Less then test: ", 9 < 24);

// Greater then or equal to
console.log("greater than & equal to test: ", 18 >= 18);

// less than or equal to
console.log("less than & equal to test: ", 6 <= 9);

//use "and" operator
console.log("and operator test: ", 18 === 18 && 18 < 20);

//use "or" operator
console.log("or operator test: ", 18 === 18 || 18 > 20);

// Test whether an item is in a array
const fruits: string[] = ["Apple", "Orange", "Mango"];
console.log("is 'Apple' in fruits: ", fruits.includes("Apple"));

// Test whether an item is not in an array
console.log("is 'Apple' not in fruits: ",fruits.includes("Apple"));
