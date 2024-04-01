//assignment no 11
//array
//define an array of names

let names:string[] = ["Ali","Hassan","sadd"];

//loop
//for each
//for of loop

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// for each
names.forEach(name => {
   console.log(name); 
});

// for of loop
for (const friendName of names) {
    console.log(friendName);

}

//assignment no 12

for (let i = 0; i < names.length; i++) {
    console.log(`hello,${names[i]}! how are you today?`);
}

// for each
names.forEach(friend => {
    console.log(`Hi, ${friend}! how are you today?`); 
 });

 // for of loop


 for (const friendName of names) {
     console.log(`Dear, ${friendName}! how are you today?`);
 }