let myName: string = "Ali Hassan";

//print in lowercase

console.log(`lowercase: ${myName.toLowerCase()}`);


//print in uppercase

console.log(`uppercase: ${myName.toUpperCase()}`);

//print in title case

console.log(`title case: ${myName.replace(/\b\w/g,c=> c.toUpperCase())}`);
