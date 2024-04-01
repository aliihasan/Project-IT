//assignment no 13
let transportationMode: string[] = ["car", "Bus", "Bike", "bicycle"];

for (let i = 0; i < transportationMode.length; i++) {
    console.log( `I would like to own a ${transportationMode[i]}`);
}
transportationMode.forEach(mode => {
    console.log(`I would like to own ${mode}`);
});
