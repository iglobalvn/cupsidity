var cups = require("../index.js");

console.log("Printers:");
console.log(cups.getDests());

console.log("Default:", cups.getDefault());


console.log("Print jobs:");
console.log(cups.getJobs());