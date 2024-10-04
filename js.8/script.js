var word = prompt("Enter word");

var para =
  "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

var removeDummy = para.replace(/dummy/g, "static");

var removeDummy = para.replace("dummy", "static").replace("the", "Abc");
console.log(removeDummy);

var num = Math.round(4.6);
console.log(" ~ num:", num);
var num1 = Math.round(4.2);
console.log(" ~ num1:", num1);
var num2 = Math.round(4.5);
console.log(" ~ num1:", num2);
var num3 = Math.ceil(4.8);
console.log(" ~ num3:", num3);
var num4 = Math.ceil(4.2);
console.log(" ~ num4:", num4);
var num5 = Math.floor(4.8);
console.log(" ~ num5:", num5);
var num6 = Math.floor(4.2);
console.log(" ~ num6:", num6);
var userId = Math.round(Math.random() * 10);
console.log("~ userId:", userId);

var arr = ["a", "b", 1, 2, true, 3, "c", "d", false, "false", 4, 5];

var getDate = new Date();
console.log(" ~ getDate:", getDate);
console.log(" ~ getDay:", getDay);
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nameOfToday = dayNames[getDay];
var getFullYear = getDate.getFullYear();
console.log(" ~ getFullYear:", getFullYear);
var getHours = getDate.getHours();
console.log(" ~ getHours:", getHours);
var getMinutes = getDate.getMinutes();
console.log(" ~ getMinutes:", getMinutes);
var getSeconds = getDate.getSeconds();
console.log(" ~ getSeconds:", getSeconds);
