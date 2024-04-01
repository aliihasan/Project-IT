//assignment no 11
//array
//define an array of names
var names = ["Ali", "Hassan", "sadd"];
//loop
//for each
//for of loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// for each
names.forEach(function (name) {
    console.log(name);
});
// for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
//assignment no 12
for (var i = 0; i < names.length; i++) {
    console.log("hello,".concat(names[i], "! how are you today?"));
}
// for each
names.forEach(function (friend) {
    console.log("Hi, ".concat(friend, "! how are you today?"));
});
// for of loop
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendName = names_2[_a];
    console.log("Dear, ".concat(friendName, "! how are you today?"));
}
