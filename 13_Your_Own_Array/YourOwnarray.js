//assignment no 13
var transportationMode = ["car", "Bus", "Bike", "bicycle"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would like to own a ".concat(transportationMode[i]));
}
transportationMode.forEach(function (mode) {
    console.log("I would like to own ".concat(mode));
});
