//assignment no 14
// Define array of guest


// Invite each guest for dinner

//guestlist.forEach(guest => {
  //  console.log(` Dear  ${guest} ), You are cordially invited to dinner `); 
//});

//assignment no 15
let guestlist: string [] = ["Ali", "hassan", "Raza"];

// print the name who cant make dinner
let unableAttend: string = guestlist.splice(1,1)[0];

console.log(`${unableAttend} not comming for dinner `);

//push

guestlist.push("uzair");

// print a message 
guestlist.forEach(guest => {
    console.log(` Dear  ${guest} ), You are cordially invited `);
    
});

//pop

