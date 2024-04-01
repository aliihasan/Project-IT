// Assignment no 43

let magician:string[] = ['Herry Potter', 'Harry Houdini', 'David Copperfield','Uri Geller','David Blaine'];

function copyArray(arr:string[]):string[]{
    return[...arr]
}

function make_great ( magicianArray:string[] ){

    for(let i=0; i<magicianArray.length; i++){

        magicianArray[i] = 'The great ' + magicianArray[i]
    }

}

function show_magicians(magicians:string[]){
    
    for(const magician of magicians) {
        console.log(magician);
    }
}

const copyMagicianArray = copyArray(magician);
    
make_great(copyMagicianArray);

console.log("\n\nThis is my original array: ");
show_magicians(magician);

console.log("\n\nThis is my modified copy of the array: ");
show_magicians(copyMagicianArray);
