// Assignment no 42

let magician:string[] = ['Herry Potter', 'Harry Houdini', 'David Copperfield','Uri Geller','David Blaine'];

function make_great ( magicianArray:string[] ){

    for(let i=0; i<magicianArray.length; i++){
        magician[i] = 'The great ' + magicianArray[i]
    }

}

function show_magicians(magicians:string[]){
    
    magician.forEach(element => {
        console.log(element);
    })
    }

make_great(magician);
show_magicians(magician);