//assignment no 14
// Define array of guest
// Invite each guest for dinner
//guestlist.forEach(guest => {
//  console.log(` Dear  ${guest} ), You are cordially invited to dinner `); 
//});
//assignment no 15
// print the name who cant make dinner
//let unableAttend: string = guestlist.splice(1,1)[0];
//console.log(`${unableAttend} not comming for dinner `);
//push
//guestlist.push("uzair");
// print a message 
//guestlist.forEach(guest => {
//  console.log(` Dear  ${guest} ), You are cordially invited `);
//});
var guestlist = ["Ali", "Raza", "uzair"];
//assignment no 16
console.log("Great News! we found a bigg table");
//unshift
guestlist.unshift(" Mr. Daniyal Nagori ");
//splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, " Mr. Kamran Tessori ");
//push();
guestlist.push(" Mr. Zia Khan ");
//foreach
guestlist.forEach(function (guest) {
    console.log(" Dear  ".concat(guest, " ), You all are cordially invited to dinner "));
});
//assignment no 17
console.log("\n Sorry we can not arrange big table, only two peoples will be invited.");
while (guestlist.length > 2) {
    var remove_guest = guestlist.pop();
    console.log(" Sorry Dear  ".concat(remove_guest, " ), You are not invited to dinner "));
}
guestlist.forEach(function (guest) {
    console.log(" Dear  ".concat(guest, " ), You are still invited to dinner "));
});
guestlist.splice(0, 2);
console.log(guestlist);
