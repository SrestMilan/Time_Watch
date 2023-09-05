// getting html element by their ID
let hour=document.getElementById("hrs");
let minute=document.getElementById("min");
let second=document.getElementById("sec");

// assigning regular function in time variable
let time=function getTime(){
    let currentTime=new Date();
    hour.innerHTML=currentTime.getHours();
    minute.innerHTML=currentTime.getMinutes();
    second.innerHTML=currentTime.getSeconds();
}
// set interval for time of 1000 milliseconds=1 second
setInterval(time,1000);





