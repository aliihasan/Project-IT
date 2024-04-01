// Assignment no 42
let magician = ['Herry Potter', 'Harry Houdini', 'David Copperfield', 'Uri Geller', 'David Blaine'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
export {};
