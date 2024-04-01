// Assignment no 28
let age = 20;
//if person is less than 2 years old, print  message that (person is a baby.)
//if person al least 2 years old but less then 4, print message (person is a toddler.)
//if person at least 4 years old but less than 13,print message (person is a kid.)
//if person at least 13 years old but less than 20, print message (person is a teenager)
//if person at least 20 years old but less than 65, print message (person is adult)
//if person's age is 65 or older, print message (person is an elder)
if (age < 2) {
    console.log("person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid");
}
else if (age >= 13 && age > 20) {
    console.log("person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("person is adult");
}
else {
    console.log("person is an elder");
}
export {};
