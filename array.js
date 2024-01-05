// var array = ["ahmad","ali","asim","zain","talal"]
// console.log(array);
function names() {
    var names = ["ahmad", true, 7, "ali", "asim", "zain", "talal"];
    console.log("names is : ", names);
}
names();
function names1() {
    var names1 = ["abdur rahman", 7, "ali", "asim", "zain", "talal"];
    names1.push("awais");
    names1.shift();
    names1.unshift("kashif");
    names1.pop();
    names1.splice(1, 4, "ahmad");
    console.log("names is : ", names1);
}
names1();
