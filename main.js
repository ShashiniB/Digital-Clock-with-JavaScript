// function for automatically update time
function showTime(){

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";
var y = date.getFullYear();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
var e = date.getDate();

if(h==0){
    h=12; //12 hour format
}

if(h>12){
    h = h-12; //12hour format
    session = "PM";
}

// if(h<10){
//     h="0"+h;
// }
// if(m<10){
//     m="0"+m;
// }
// if(s<10){
//     s="0"+s;
// }

h = (h<10)?"0"+h:h;
m = (m<10)?"0"+m:m;
s = (s<10)?"0"+s:s;

document.getElementById('digitalClock').innerHTML = h + ":" + m + ":" + s + " " + session;
setTimeout(showTime, 1000);
document.getElementById('date').innerHTML = y + " / " + name + " / " + e;
}
showTime();