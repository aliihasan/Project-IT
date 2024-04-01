//assignment no 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Italy", "Germany", "Uk", "USA", "Greece"];
console.log("orignal " + places);
//print array in alphabetical order without modifying the actual list.
console.log("copy " + __spreadArray([], places, true).sort());
//show that array is still in its original order by printing it.
console.log("orignal " + places);
//print array in reverse alphabetical order without changing theorder of the original list.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
//show that array is still in its original order by printing it again.
console.log("orignal " + places);
//Reverse the order of list. print the array to show that its order has changed.
console.log("orignal " + places.reverse());
//Reverse the order of list again. Print the list to show its back to its original order.
console.log("orignal " + places.reverse());
//Sort array so its stored in alphabetical order. Print the array to show that its order has been changed.
console.log("orignal " + places.sort());
//Sort to change array so its stored in reverse alphabetical order. Print the list to show that its order has  been changed.
console.log("orignal " + places.sort().reverse());
