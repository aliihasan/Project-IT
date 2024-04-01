// Assignment no 27
//write the version of this program, making sure each message is printed for the approriate color alien. 
let aliencolor = "green";
//if the alien color is green.
//print message that (player earned 5 points)
//if alien color is yellow print message (player earned 10 points)
//if alien color is red print message (player earned 15 points) 
if (aliencolor === "green") {
    console.log("player earnd 5 points:");
}
else if (aliencolor === "yellow") {
    console.log("player earnd 10 points:");
}
else if (aliencolor === "red") {
    console.log("player earnd 15 points:");
}
else {
    console.log("please select right color:");
}
// version 2 of program
aliencolor = "yellow";
if (aliencolor === "green") {
    console.log("player earnd 5 points:");
}
else if (aliencolor === "yellow") {
    console.log("player earnd 10 points:");
}
else if (aliencolor === "red") {
    console.log("player earnd 15 points:");
}
else {
    console.log("please select right color:");
}
// version 3 of program
aliencolor = "red";
if (aliencolor === "green") {
    console.log("player earnd 5 points:");
}
else if (aliencolor === "yellow") {
    console.log("player earnd 10 points:");
}
else if (aliencolor === "red") {
    console.log("player earnd 15 points:");
}
else {
    console.log("please select right color:");
}
export {};
