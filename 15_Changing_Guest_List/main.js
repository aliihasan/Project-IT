//assignment no 14
// Define array of guest
// Invite each guest for dinner
//guestlist.forEach(guest => {
//  console.log(` Dear  ${guest} ), You are cordially invited to dinner `); 
//});
//assignment no 15
var guestlist = ["Ali", "hassan", "Raza"];
// print the name who cant make dinner
var unableAttend = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttend, " not comming for dinner "));
//push
guestlist.push("uzair");
// print a message 
guestlist.forEach(function (guest) {
    console.log(" Dear  ".concat(guest, " ), You are cordially invited "));
});
//pop
