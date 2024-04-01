var myName = "Ali Hassan";
//print in lowercase
console.log("lowercase: ".concat(myName.toLowerCase()));
//print in uppercase
console.log("uppercase: ".concat(myName.toUpperCase()));
//print in title case
console.log("title case: ".concat(myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); })));
