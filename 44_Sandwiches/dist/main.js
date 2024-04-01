// Assignment no 44
function makesandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("_" + element));
    console.log('Enjoy your sandwich !\n');
}
makesandwich(['tomato', 'onion', 'mushroom']);
makesandwich(['Cheese', 'Ham']);
makesandwich(['peanut butter', 'jelly']);
export {};
